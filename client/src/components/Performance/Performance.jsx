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
                        {performance.title}
                    </h1>
                    <p className="performance__text">
                        {performance.text}
                    </p>
                    <div className="performance__ui row">
                        <div className="col-sm-6">
                            <ButtonStart>{performance.startBtn}</ButtonStart>
                        </div>
                        <div className="col-sm-6">
                            <a className="performance__google-partner" href="client/src/pages/Landing/Landing#">
                                <img src={googlePartner} alt="google partner"/>
                            </a>
                        </div>
                    </div>
                    <div className="performance__decor">
                        <img src={performanceDecor} alt=""/>
                    </div>
                </div>
                <div className="col-md-1">
                </div>
                <div className="col-md-6">
                    <img className="performance__stat-img" src={statImg} alt="statistics"/>
                </div>
            </div>
        </article>
    );
};

export default Performance;