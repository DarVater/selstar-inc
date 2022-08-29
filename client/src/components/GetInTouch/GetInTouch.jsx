import React from 'react';
import './GetInTouch.scss'
import Article from "../Article/Article";
import Input from "../UI/Input/Input";
import getDecor1 from './img/getDecor1.png'
import getDecor2 from './img/getDecor2.png'

const GetInTouch = () => {
    return (
        <article className={"get-in-touch"} id={'get_in_touch'}>
            <Article
                className={"article--center article--green"}
                title={"Get in touch"}
                underLineColor={"#32A952"}
            ></Article>
            <form action="client/src/components/GetInTouch/GetInTouch#">
                <Input
                    name={"name"}
                    type={"text"}
                    value={"Your Name"}
                ></Input>
                <Input
                    name={"email"}
                    type={"email"}
                    value={"Your Email"}
                ></Input>
                <Input
                    name={"message"}
                    type={"text"}
                    value={"Your Message"}
                ></Input>
                <div className="get-in-touch__submit">
                    <button type="submit" className=" btn btn-primary ">Submit</button>
                </div>
            </form>
            <div className="get-in-touch__decor1">
                <img src={getDecor1} alt=""/>
            </div>
            <div className="get-in-touch__decor2">
                <img src={getDecor2} alt=""/>
            </div>

        </article>
    );
};

export default GetInTouch;