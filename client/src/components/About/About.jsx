import React from 'react';
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

const benefitList = [
    {
        img: goodImg,
        text: "Lorem ipsum Dolor Sit"
    },
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
    return (
        <article className="about " id="about">
            <div className="row need-flex-column-reverse">
                <div className="col-md-6 ">
                    {benefitList.map((item) =>
                        <Benefit key={item.text+item.img} text={item.text} img={item.img}></Benefit>
                    )}
                </div>
                <div className="col-md-6">
                    <div className="about__decor-zip">
                        <img src={decorZipImg} alt="about decor zip"/>
                    </div>
                    <Article
                        title={"About"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus neque a mollis\n" +
                            "                vestibulum. Aenean malesuada enim a nisi lacinia Lorem ipsum dolor sit amet, consectetur\n" +
                            "                adipiscing elit. In maximus neque a mollis vestibulum. Aenean malesuada enim a nisi\n" +
                            "                lacinia Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus neque a\n" +
                            "                mollis vestibulum. Aenean malesuada enim a nisi lacinia"}
                    ></Article>
                </div>
            </div>
        </article>
    );
};

export default About;