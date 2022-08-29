import React from 'react';
import './ButtonStart.scss'

const ButtonStart = (props) => {
    return (
        <div className="btn-start">
            <button type="button" className="btn btn-primary ">
                {props.children}
            </button>
        </div>
    );
};

export default ButtonStart;