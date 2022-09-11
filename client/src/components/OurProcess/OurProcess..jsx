import React, {useContext} from 'react';
import Article from "../Article/Article";
import './OurProcess.scss'
import OurProcessDecor1 from './img/OurProcessDecor1.png'
import OurProcessDecor2 from './img/OurProcessDecor2.png'
import ProcesPoint from "../ProcesPoint/ProcesPoint";

import monitorImg from '../ProcesPoint/img/Monitor.png'
import analyseImg from '../ProcesPoint/img/Analyse.png'
import reportImg from '../ProcesPoint/img/Report.png'
import {LendingContext} from "../../context/LendingContext";

const ourProcessList = [
    {
        img: monitorImg,
        title: "",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit psum dolor sit consectetur adipiscing"
    },
    {
        img: analyseImg,
        title: "",
        text: ""
    },
    {
        img: reportImg,
        title: "",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit psum dolor sit consectetur adipiscing"
    },
]
const OurProcess = () => {
    const lendingSettings = useContext(LendingContext).lendingSettings
    if (!lendingSettings) {
        return ''
    }
    let ourProcess = lendingSettings["Our Process"]
    console.log("ourProcess", ourProcess)
    const ourProcessList = Object.keys(ourProcess).filter((item) =>{
        return  item.includes("one-process-")
    })
    console.log("ourProcessList", ourProcessList)
    return (
        <article className={"our-process"} id={"our_process"}>
            <Article
                className={"article--center article--blue"}
                title={""}
            ></Article>
            <div className="our-process__decor-line">
                <img src={process.env.REACT_APP_API_URL + ourProcess["decor-1"].file} alt="vector img"/>
            </div>
            <div className="our-process__decor-2">
                <img src={process.env.REACT_APP_API_URL + ourProcess["decor-2"].file} alt="vector img"/>
            </div>
            <div className="row">
                {ourProcessList.map((item) =>
                    <div key={ourProcess[item].title + ourProcess[item].text} className="col-md-4 our-process__progress-point">
                        <ProcesPoint
                            title={ourProcess[item].title}
                            text={ourProcess[item].text}
                            img={process.env.REACT_APP_API_URL + ourProcess[item].file}
                        ></ProcesPoint>
                    </div>
                )}
            </div>
            
        </article>
    );
};

export default OurProcess;