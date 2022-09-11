import React, {useContext} from 'react';
import './GetInTouch.scss'
import Article from "../Article/Article";
import Input from "../UI/Input/Input";
import getDecor1 from './img/getDecor1.png'
import getDecor2 from './img/getDecor2.png'
import {LendingContext} from "../../context/LendingContext";

const GetInTouch = () => {
    const lendingSettings = useContext(LendingContext).lendingSettings
    if (!lendingSettings) {
        return ''
    }
    let getInTouch = lendingSettings["Contact us"]
    console.log("getInTouch", getInTouch)
    const formFieldList = Object.keys(getInTouch).filter((item) =>{
        return  item.includes("form-field-")
    })
    console.log("formFieldList", formFieldList)
    return (
        <article className={"get-in-touch"} id={'get_in_touch'}>
            <Article
                className={"article--center article--green"}
                title={getInTouch['title'].text }
                underLineColor={"#32A952"}
            ></Article>
            <form action="client/src/components/GetInTouch/GetInTouch#">
                {formFieldList.map((item) =>
                    <Input
                        key={ getInTouch[item].name}
                        name={getInTouch[item].name}
                        type={getInTouch[item].type}
                        value={getInTouch[item].value}
                    ></Input>
                )}
                <div className="get-in-touch__submit">
                    <button type="submit" className=" btn btn-primary ">{getInTouch['submit-text'].text}</button>
                </div>
            </form>
            <div className="get-in-touch__decor1">
                <img src={process.env.REACT_APP_API_URL + getInTouch["decor-1"].file} alt=""/>
            </div>
            <div className="get-in-touch__decor2">
                <img src={process.env.REACT_APP_API_URL + getInTouch["decor-2"].file} alt=""/>
            </div>

        </article>
    );
};

export default GetInTouch;