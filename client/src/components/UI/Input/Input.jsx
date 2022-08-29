import React from 'react';
import './Input.scss'

const Input = ({type, value, name}) => {
    return (
        <div className={"form-item"}>
            <span>{value} :</span>
            <input
                className={"form-item__input"}
                name={name}
                type={type}
            />
        </div>
    );
};

export default Input;