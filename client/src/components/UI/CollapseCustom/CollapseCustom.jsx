import React, {useRef} from 'react';
import './CollapseCustom.scss'
import toggleImg from './img/toggle.png'

const CollapseCustom = ({title, list}) => {
    const toggleBtn = useRef(null)
    const toggled = useRef(null)
    const onButtonClick = () => {
        if (toggleBtn.current.ariaExpanded === "true"){
            toggled.current.style.transform = 'rotate(0deg)'
        } else {
            toggled.current.style.transform = 'rotate(-90deg)'
        }
    };
    return (
        <div className={"collapse-custom"}>
            <p className="text-uppercase w-100"  data-bs-toggle="collapse" aria-controls="collapseExample"
                onClick={onButtonClick}
                data-bs-target={"#collapseExample"+title.split(" ").join('')} aria-expanded="false" ref={toggleBtn}
            >
                {title}
                <img className={"collapse-custom_icon"} style={{transform: 'rotate(-90deg)'}} ref={toggled} src={toggleImg} alt=""/>
            </p>
            <div className="collapse dont-collapse-sm" id={"collapseExample"+title.split(" ").join('')}>
                <ul className="collapse-custom__list">
                    {list.map((item) =>
                        <li key={item.value+item.href} className="collapse-custom__item">
                            <a href={item.href} className="collapse-custom__link">{item.value}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default CollapseCustom;