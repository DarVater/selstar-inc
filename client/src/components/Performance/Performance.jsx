import React, {useContext, useEffect} from 'react';
import './Performance.scss'
import ButtonStart from "../UI/ButtonStart/ButtonStart";
import googlePartner from "./img/google-partner.png";
import performanceDecor from "./img/performance__decor.png";
import statImg from "./img/statistics.jpg";
import {LendingContext} from "../../context/LendingContext";

const Performance = () => {
    const lendingSettings = useContext(LendingContext).lendingSettings
    if (!lendingSettings) {
        return ''
    }
    let performance = lendingSettings["Performance"]
    return (
        <article className="performance" id="performance">
            <div className="row">
                <div className="col-md-5">
                    <h1 className="performance__title">
                        {performance.title.text}
                    </h1>
                    <p className="performance__text">
                        {performance.text.text}
                    </p>
                    <div className="performance__ui row">
                        <a
                            href={performance['startBtn'].link}
                            className="col-sm-6"
                        >
                            <ButtonStart>{performance.startBtn.text}</ButtonStart>
                        </a>
                        <div className="col-sm-6">
                            <a
                                href={performance['performance__google-partner'].link}
                                className="performance__google-partner"
                            >
                                <img src={process.env.REACT_APP_API_URL  + performance['performance__google-partner'].file} alt="google partner"/>
                            </a>
                        </div>
                    </div>
                    <div className="performance__decor">
                        <img src={performanceDecor.file} alt=""/>
                    </div>
                </div>
                <div className="col-md-1">
                </div>
                <div className="col-md-6">
                    <img className="performance__stat-img" src={process.env.REACT_APP_API_URL +
                        performance.performance__stat.file} alt="statistics"/>
                </div>
            </div>
        </article>
    );
};

export default Performance;