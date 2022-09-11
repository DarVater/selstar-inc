import React, { useContext} from 'react';
import './About.scss'
import Benefit from "../Benefit/Benefit";
import decorZipImg from "./img/decorZip.svg";
import Article from "../Article/Article";
import goodImg from "../Benefit/img/good.png";
import checkImg from "../Benefit/img/check.png";
import rocketImg from "../Benefit/img/rocket.png";
import chartImg from "../Benefit/img/chart.png";
import cashImg from "../Benefit/img/cash.png";
import lockImg from "../Benefit/img/lock.png";
import ButtonStart from "../UI/ButtonStart/ButtonStart";
import {LendingContext} from "../../context/LendingContext";

const benefitList = [
    {
        img: checkImg,
        text: "Lorem ipsum Dolor Sit"
    },
    {
        img: rocketImg,
        text: "Lorem"
    },
    {
        img: chartImg,
        text: "Lorem Ipsum Dolor"
    },
    {
        img: cashImg,
        text: "Lorem Ipsum"
    },
    {
        img: lockImg,
        text: "Lorem Ipsum Dolor"
    },
]

const About = () => {
    const lendingSettings = useContext(LendingContext).lendingSettings
    if (!lendingSettings) {
        return ''
    }
    let AboutUs = lendingSettings["About us"]
    const benefitList = Object.keys(AboutUs).filter((item) =>{
        return  item.includes("benefit-")
    })
    console.log(benefitList)
    return (
        <article className="about " id="about">
            <div className="row need-flex-column-reverse">
                <div className="col-md-6 ">
                    {benefitList.map((item) =>
                        <Benefit
                            key={item}
                            text={AboutUs[item].text}
                            img={process.env.REACT_APP_API_URL + AboutUs[item].file}
                        ></Benefit>
                    )}
                </div>
                <div className="col-md-6">
                    <div className="about__decor-zip">
                        <img src={decorZipImg} alt="about decor zip"/>
                    </div>
                    <Article
                        title={AboutUs.title.text}
                        text={AboutUs.text.text}
                    > </Article>
                </div>
            </div>
        </article>
    );
};

export default About;