import React from 'react';
import './ServiceCard.scss'
const ServiceCard = ({img, text, title, borderTopColor}) => {
    return (
        <div className="service-card-wrapper">
            <div className="service-card" style={{borderTop: `0.6rem solid ${borderTopColor}`}}>
                <div className="service-card__icon">
                    <img src={img} alt={title}/>
                </div>
                <h4 className="service-card__title">
                    {title}
                </h4>
                <p className="service-card__text">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default ServiceCard;