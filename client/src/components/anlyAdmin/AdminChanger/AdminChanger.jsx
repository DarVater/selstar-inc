import React, {useContext, useEffect, useMemo, useRef, useState} from 'react';
import './AdminChanger.scss'
import {LendingContext} from "../../../context/LendingContext";
import {useHttp} from "../../../hooks/useHttp";

const getAllInputs = (lendingPartsActive, lendingSettings) => {
    return Object.keys(lendingSettings[lendingPartsActive]).reduce((acc, item) => {
        acc[item] = lendingSettings[lendingPartsActive][item]
        return acc
    }, {})
}
const getLendingSettingsFromContext = (lendingPartsActive, lendingSettings) => {
    return Object.keys(lendingSettings[lendingPartsActive]).reduce((acc, item) => {
        acc[item] =lendingSettings[lendingPartsActive][item]
        return acc
    }, {})
}
const getLendingSettingsFromState = (allInputs) => {
    return Object.keys(allInputs).reduce((acc, item) => {
        acc[item] = allInputs[item]
        return acc
    }, {})
}
const saveLendingSettings = (LSFromState, lendingSettings, setLendingSettings, lendingPartsActive, request, saveResponse, fileListToUpload) => {
    console.log("save")
    console.log("saveLendingSettings =>", fileListToUpload)

    saveResponse.current.innerText= 'wait'
    const token = JSON.parse(localStorage.getItem("userData")).token
    lendingSettings[lendingPartsActive] = LSFromState

    let data = new FormData()
    // console.log('=>', document.querySelector(`input[name='${fileListToUpload[0]}']`).files[0])
    // data.file = document.querySelector(`input[name='${fileListToUpload[0]}']`).files[0]
    data.token = token
    data.lendingSettings = lendingSettings
    console.log(111111, data)

    request('/api/data/update', "POST", data).then(function(value) {
        console.log(value)
        console.log(saveResponse)
        saveResponse.current.innerText= value.message.acknowledged
        value && setLendingSettings(value.newData)
    })
}
const handleImageUpload = (event, part, item, setLendingSettings) => {
    const files = event.target.files
    const token = JSON.parse(localStorage.getItem("userData")).token
    const formData = new FormData()
    formData.append('token', token)
    formData.append('part', part)
    formData.append('item', item)
    formData.append('myFile', files[0])
    const saveInfo = document.getElementById(`${part+item}`)
    console.log("saveInfo => " , saveInfo)
    saveInfo.innerText = "upload"
    fetch('/api/data/saveImage', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            saveInfo.innerText = data.message.fileName
            setLendingSettings(data.newData)
        })
        .catch(error => {
            console.error(error)
        })
}
const AdminChanger = ({lendingPartsActive}) => {
    const [fileListToUpload, setFileListToUpload] = useState([])
    const {lendingSettings, setLendingSettings } = useContext(LendingContext)
    const saveResponse = useRef()
    const {request} = useHttp()
    const [canSave, setCanSave] = useState(false)
    const [allInputs, setAllInputs] = useState({})
    if (!lendingPartsActive) {
        return ''
    }
    useMemo(() => {
        setAllInputs(getAllInputs(lendingPartsActive, lendingSettings))
    }, [lendingPartsActive, lendingSettings])

    const LSFromContext = getLendingSettingsFromContext(lendingPartsActive, lendingSettings)
    const LSFromState = getLendingSettingsFromState(allInputs)

    useEffect(() => {
        if (JSON.stringify(LSFromState) !== JSON.stringify(LSFromContext) ){
            setCanSave(true)
        }
    }, [LSFromState])
    console.log(allInputs.performance__stat && allInputs.performance__stat.file)
    return (
        <div className="admin-settings">
            <hr/>
            <div>
                <button
                    onClick={() => saveLendingSettings(
                        LSFromState, lendingSettings,
                        setLendingSettings,
                        lendingPartsActive, request, saveResponse, fileListToUpload
                    )}
                    type="button"
                    className={`btn btn-lg btn-outline-${canSave ? "success" : "secondary"}`}
                    disabled={!canSave}
                >Save
                </button>
                <span className={"admin-settings__save-response"} ref={saveResponse}></span>
            </div>
            {Object.keys(allInputs).map((item) =>
                <div
                    className="admin-settings__props-group"
                    key={item}
                >
                    <label htmlFor="exampleInputEmail1" className="admin-settings__label">{item}</label>
                    {['link', 'text', 'title', 'color', 'name', 'type', 'value'].map((type) =>
                       allInputs[item][type] && <div
                            className="admin-settings__one-props row"
                            key={item + type}
                        >
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">{type}</label>
                            <div className="col-sm-10">
                                <input
                                    key={item + type}
                                    onChange={e => setAllInputs({...allInputs,
                                        [item]: {...allInputs[item], [type]: e.target.value}})}
                                    value={allInputs[item][type]}
                                    type="text"
                                    name={item}
                                    className="admin-settings__input form-control"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                        </div>
                    )}
                    { allInputs[item].file  && <div  className={"admin-settings__one-props"}>
                        <span id={lendingPartsActive+item} className={"admin-settings__old-file-name"}>file: {allInputs[item].file}</span>

                        <input
                        onChange={e => {
                            // setFileListToUpload([...fileListToUpload, (item+"+file")]);
                            // setCanSave(true);
                            handleImageUpload(e, lendingPartsActive, item, setLendingSettings)
                        }}
                        type="file"
                        className={"admin-settings__new-file"}
                        />
                    </div>
                    }
                </div>
            )}
        </div>
    );
};

export default AdminChanger;