import React from 'react';
import './ProcesPoint.scss'

const ProcesPoint = ({img, title, text}) => {
    return (
        <div className="progress-point">
            <div className="progress-point__ico">
                <img src={img} alt=""/>
            </div>
            <h1 className="progress-point__title">
                {title}
            </h1>
            <p className="progress-point__text">
                {text}
            </p>
        </div>
    );
};

export default ProcesPoint;