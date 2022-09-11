import React, {useContext} from 'react';
import './Navbar.scss'
import {LendingContext} from "../../context/LendingContext";

const Navbar = () => {
    const lendingSettings = useContext(LendingContext).lendingSettings
    if (!lendingSettings) {
        return ''
    }
    let header = lendingSettings["header"]
    console.log("header", header)
    const navbarList = Object.keys(header).filter((item) =>{
        return  item.includes("navbar-")
    })
    console.log("navbarList", navbarList)
    return (
        <nav className="navbar navbar-expand-lg " id="navbarNav">
            <div className="container">
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav">
                        {navbarList.map((item) =>
                            <li
                                key={item}
                                className="nav-item"
                            >
                                <a className="nav-link " aria-current="page" href={header[item].link}>
                                    {header[item].value}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;