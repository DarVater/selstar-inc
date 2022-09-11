import React, {useContext}  from 'react';
import logo from './logo.svg'
import './Header.scss'
import Navbar from "../Navbar/Navbar";
import ButtonStart from "../UI/ButtonStart/ButtonStart";
import {LendingContext} from "../../context/LendingContext";

const Header = () => {
    const lendingSettings = useContext(LendingContext).lendingSettings
    if (!lendingSettings) {
        return ''
    }
    let header = lendingSettings["header"]
    console.log("header", header)
    return (
        <div className="sticky-md-top">
            <div className="container">
                <div className="header">
                    <a href={header['logo'].link}>
                        <img src={process.env.REACT_APP_API_URL + header['logo'].file} alt={header['logo'].text}/>
                    </a>
                    <Navbar></Navbar>
                    <a href={header['startBtn'].link}>
                        <ButtonStart>{header['startBtn'].text}</ButtonStart>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;