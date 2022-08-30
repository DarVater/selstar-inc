import React from 'react';
import './Footer.scss'
import logoImg from './img/logo_white.png'
import CollapseCustom from "../UI/CollapseCustom/CollapseCustom";

import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, LENDING_ROUTE} from "../../utils/consts";

const allCollapsesList = [
    {
        title: 'Navigation',
        list: [
            {value: "About Us", href: "#about"},
            {value: "Services", href: "#services_we_provide"},
            {value: "Our Process", href: "#our_process"},
            {value: "Get In Touch", href: "#get_in_touch"},
        ]
    },
    {
        title: 'sERVICES',
        list: [
            {value: "organic Search (SEO)", href: "#"},
            {value: "pay per Click (PPC)", href: "#"},
            {value: "Marketing Analytics", href: "#"},
            {value: "Web Development", href: "#"},
        ]
    },
    {
        title: 'Follow us',
        list: [
            {value: "facebook ", href: "#"},
            {value: "Instagram", href: "#"},
            {value: "Youtube", href: "#"},
        ]
    },
]

const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className={"footer-wrapper"}>
            <div className={"container"}>
                <div className="row footer">
                    <div className="footer__desc">
                        <div className={"footer__logo"}>
                            <img src={logoImg} alt="logo"/>
                        </div>
                        <p className="footer__text">
                            Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Felis nibh aenean fringila id
                            sodales
                            consequat. Lorem ipsum dolor sit amet.
                        </p>
                        <p className={"footer__rights"}
                            onClick={() => navigate(LOGIN_ROUTE)} >© 2021. all rights reserved
                        </p>
                    </div>
                    <div className="row  footer__all-collapses">
                        {allCollapsesList.map((item) =>
                            <div key={item.title}className="col-lg-4">
                                <CollapseCustom
                                title={item.title}
                                list={item.list}
                                ></CollapseCustom>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;