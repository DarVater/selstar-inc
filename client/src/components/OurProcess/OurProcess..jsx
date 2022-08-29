import React from 'react';
import Article from "../Article/Article";
import './OurProcess.scss'
import OurProcessDecor1 from './img/OurProcessDecor1.png'
import OurProcessDecor2 from './img/OurProcessDecor2.png'
import ProcesPoint from "../ProcesPoint/ProcesPoint";

import monitorImg from '../ProcesPoint/img/Monitor.png'
import analyseImg from '../ProcesPoint/img/Analyse.png'
import reportImg from '../ProcesPoint/img/Report.png'

const ourProcessList = [
    {
        img: monitorImg,
        title: "Monitor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit psum dolor sit consectetur adipiscing"
    },
    {
        img: analyseImg,
        title: "Analyse",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit psum dolor sit consectetur adipiscing"
    },
    {
        img: reportImg,
        title: "Report",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit psum dolor sit consectetur adipiscing"
    },
]
const OurProcess = () => {
    return (
        <article className={"our-process"} id={"our_process"}>
            <Article
                className={"article--center article--blue"}
                title={"Our Process"}
            ></Article>
            <div className="our-process__decor-line">
                <img src={OurProcessDecor1} alt="vector img"/>
            </div>
            <div className="our-process__decor-2">
                <img src={OurProcessDecor2} alt="vector img"/>
            </div>
            <div className="row">
                {ourProcessList.map((item) =>
                    <div key={item.title} className="col-md-4 our-process__progress-point">
                        <ProcesPoint
                            img={item.img}
                            title={item.title}
                            text={item.text}
                        ></ProcesPoint>
                    </div>
                )}
            </div>
            
        </article>
    );
};

export default OurProcess;