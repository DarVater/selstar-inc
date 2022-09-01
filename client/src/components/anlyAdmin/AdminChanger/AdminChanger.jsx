import React, {useContext, useEffect, useMemo, useRef, useState} from 'react';
import './AdminChanger.scss'
import {LendingContext} from "../../../context/LendingContext";
import useInput from "../../../hooks/useInput";
import {useHttp} from "../../../hooks/useHttp";

const getAllInputs = (lendingPartsActive, lendingSettings) => {
    return Object.keys(lendingSettings[lendingPartsActive]).reduce((acc, item) => {
        acc[item] = useInput(lendingSettings[lendingPartsActive][item])
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
        acc[item] = allInputs[item].value
        return acc
    }, {})
}
const saveLendingSettings = (LSFromState, lendingSettings, setLendingSettings, lendingPartsActive, request, saveResponse) => {
    console.log("save")
    saveResponse.current.innerText= 'wait'
    const token = JSON.parse(localStorage.getItem("userData")).token
    lendingSettings[lendingPartsActive] = LSFromState
    request('/api/data/update', "POST", {token, lendingSettings}).then(function(value) {
        console.log(value)
        console.log(saveResponse)
        saveResponse.current.innerText= value.message.acknowledged
        value && setLendingSettings(value.newData)
    })


}
const AdminChanger = ({lendingPartsActive}) => {
    const {lendingSettings, setLendingSettings } = useContext(LendingContext)
    const saveResponse = useRef()
    const {request} = useHttp()
    const [canSave, setCanSave] = useState(false)
    let allInputs = {}
    if (!lendingPartsActive) {
        return ''
    }
    allInputs = getAllInputs(lendingPartsActive, lendingSettings)

    const LSFromContext = getLendingSettingsFromContext(lendingPartsActive, lendingSettings)
    const LSFromState = getLendingSettingsFromState(allInputs)

    useEffect(() => {
        if (JSON.stringify(LSFromState) !== JSON.stringify(LSFromContext) ){
            setCanSave(true)
        }
    }, [LSFromState])
    return (
        <div className="admin-settings">
            <hr/>
            <div>
                <button
                    onClick={() => saveLendingSettings(
                        LSFromState, lendingSettings,
                        setLendingSettings,
                        lendingPartsActive, request, saveResponse
                    )}
                    type="button"
                    className={`btn btn-lg btn-outline-${canSave ? "success" : "secondary"}`}
                    disabled={!canSave}
                >Save
                </button>
                <span className={"admin-settings__save-response"} ref={saveResponse}></span>
            </div>
            {Object.keys(allInputs).map((item) =>
                <div className="mb-3" key={item}>
                    <label htmlFor="exampleInputEmail1" className="form-label">{item}</label>
                    <input
                        onChange={allInputs[item].onChange}
                        value={allInputs[item].value}
                        type="text"
                        name={item}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
            )}
        </div>
    );
};

export default AdminChanger;