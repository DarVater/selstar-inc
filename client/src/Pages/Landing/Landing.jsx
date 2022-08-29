import React from 'react';
import './Landing.scss';
import ServicesWeProvide from "../../components/ServicesWeProvide/ServicesWeProvide";
import About from "../../components/About/About";
import Performance from "../../components/Performance/Performance";
import OurProcess from "../../components/OurProcess/OurProcess.";
import GetInTouch from "../../components/GetInTouch/GetInTouch";


const Landing = () => {
    return (
        <div className="container">
            <Performance></Performance>
            <About></About>
            <ServicesWeProvide></ServicesWeProvide>
            <OurProcess></OurProcess>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Landing;