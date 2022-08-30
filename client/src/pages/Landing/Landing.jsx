import React from 'react';
import './Landing.scss';
import ServicesWeProvide from "../../components/ServicesWeProvide/ServicesWeProvide";
import About from "../../components/About/About";
import Performance from "../../components/Performance/Performance";
import OurProcess from "../../components/OurProcess/OurProcess.";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


const Landing = () => {
    return (
        <div>
            <div className="container">
                <Header></Header>
                <Performance></Performance>
                <About></About>
                <ServicesWeProvide></ServicesWeProvide>
                <OurProcess></OurProcess>
                <GetInTouch></GetInTouch>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Landing;