import React from 'react';
import logo from './logo.svg'
import './Header.scss'
import Navbar from "../Navbar/Navbar";
import ButtonStart from "../UI/ButtonStart/ButtonStart";

const Header = () => {
    return (
        <div className="sticky-md-top">
            <div className="container">
                <div className="header">
                    <a href="client/src/components/Header/Header#performance">
                        <img src={logo} alt="logo"/>
                    </a>
                    <Navbar></Navbar>
                    <ButtonStart>Get Started Today!</ButtonStart>
                </div>
            </div>
        </div>
    );
};

export default Header;