import React, {useState} from 'react';
import './Admin.scss'
import AdminNav from "../../components/anlyAdmin/AdminNav/AdminNav";
import About from "../../components/About/About";
import ServicesWeProvide from "../../components/ServicesWeProvide/ServicesWeProvide";
import OurProcess from "../../components/OurProcess/OurProcess.";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Performance from "../../components/Performance/Performance";
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
            </div>
        </div>
    );
};

export default Admin;