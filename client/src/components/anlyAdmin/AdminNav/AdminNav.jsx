import React, {useContext, useState} from 'react';
import './AdminNav.scss'
import About from "../../About/About";
import ServicesWeProvide from "../../ServicesWeProvide/ServicesWeProvide";
import {LOGIN_ROUTE} from "../../../utils/consts";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../../context/AuthContext";


const AdminNav = ({active, setActive, tabList}) => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const chooseTab = (tab) => {
        event.preventDefault()
        if (tab === 'Logout') {
            auth.logout()
            navigate(LOGIN_ROUTE)
        }
        setActive(tab)
    }

    return (
        <div className={"navAdmin"}>
            <ul className="nav nav-tabs">
                {tabList.map((item) =>
                    <li key={item} className="nav-item ">
                        <a
                            onClick={e => chooseTab(item)}
                            className={active === item ? "nav-link active" : "nav-link"}
                        >{item}</a>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default AdminNav;