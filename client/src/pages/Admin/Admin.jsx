import React, {useContext, useEffect, useState} from 'react';
import './Admin.scss'
import AdminNav from "../../components/anlyAdmin/AdminNav/AdminNav";
import About from "../../components/About/About";
import ServicesWeProvide from "../../components/ServicesWeProvide/ServicesWeProvide";
import OurProcess from "../../components/OurProcess/OurProcess.";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Performance from "../../components/Performance/Performance";
import {LendingContext} from "../../context/LendingContext";
import AdminChanger from "../../components/anlyAdmin/AdminChanger/AdminChanger";
const tabList = [
    "Performance",
    "About us",
    "Services",
    "Our Process",
    "Contact us",
    "Admin Settings",
    "Logout",
]

const Admin = () => {
    const [lendingPartsActive, setLendingPartsActive] = useState()
    const {lendingSettings, setLendingSettings} = useContext(LendingContext)
    if (!lendingSettings ) {
        return ''
    }
    return (
        <div >
            <div className={"container"}>
                <AdminNav
                    active={lendingPartsActive}
                    setActive={setLendingPartsActive}
                    tabList={tabList}
                ></AdminNav>
                { lendingPartsActive === "About us" && <About/> }
                { lendingPartsActive === "Performance" && <Performance/> }
                { lendingPartsActive === "Services" && <ServicesWeProvide/> }
                { lendingPartsActive === "Our Process" && <OurProcess/> }
                { lendingPartsActive === "Contact us" && <GetInTouch/> }
                { lendingPartsActive === "Admin Settings" && <About/> }
                {lendingPartsActive && <AdminChanger lendingPartsActive={lendingPartsActive}/>}
            </div>
        </div>
    );
};

export default Admin;