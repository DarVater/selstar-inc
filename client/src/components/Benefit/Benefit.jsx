import React from 'react';
import './Benefit.scss'

const Benefit = ({img, text}) => {
    return (

        <div className="about__benefit benefit">
            <div className="benefit__content">
                <span className="benefit__ico">
                    <img src={img} alt="good image"/>
                </span>
                <span className="benefit__text">{text}</span>
            </div>
        </div>
    );
};

export default Benefit;