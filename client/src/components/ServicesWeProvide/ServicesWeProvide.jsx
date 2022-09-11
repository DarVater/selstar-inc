import React, {useContext} from 'react';
import Article from "../Article/Article";
import ButtonStart from "../UI/ButtonStart/ButtonStart";
import serviceDecor1 from "./img/serviceDecor1.png";
import serviceDecor2 from "./img/serviceDecor2.png";
import ServiceCard from "../ServiceCard/ServiceCard";
import servicePpcImg from "../ServiceCard/img/service_ppc.png";
import serviceSeoImg from "../ServiceCard/img/service_seo.png";
import serviceMarketingImg from "../ServiceCard/img/service_marketing.png";
import serviceWebImg from "../ServiceCard/img/service_web.png";
import './ServicesWeProvide.scss'
import {LendingContext} from "../../context/LendingContext";

const serviceList = [
    {
        img: servicePpcImg, color: '#FFBC30',
        title: "PPC (Pay Per Click)",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit psum dolor sit"
    },
    {
        img: serviceSeoImg, color: '#EA4435',
        title: "SEO Marketing",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit psum dolor sit"
    },
    {
        img: serviceMarketingImg, color: '#32A952',
        title: "Marketing Analytics",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit psum dolor sit"
    },
    {
        img: serviceWebImg, color: '#3F85F4',
        title: "Web Development",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit psum dolor sit"
    },
]

const ServicesWeProvide = () => {
    const lendingSettings = useContext(LendingContext).lendingSettings
    if (!lendingSettings) {
        return ''
    }
    let services = lendingSettings["Services"]

    const servicesCardList = Object.keys(services).filter((item) =>{
        return  item.includes("service-")
    })
    return (
        <article className="services-we-provide " id="services_we_provide">
            <div className="row ">
                <div className="col-md-6">
                    <Article
                        className={"article__title--decor-red"}
                        title={services.title.text}
                        text={services.text.text}
                    ></Article>
                    <a
                        href={services['getBtn'].link}
                        className="services-we-provide__btn-get-start"
                    >
                        <ButtonStart  >{services.getBtn.text}</ButtonStart>
                    </a>
                    <div className="services-we-provide__decor-1">
                        <img src={serviceDecor1} alt="service decor 1"/>
                    </div>
                    <div className="services-we-provide__decor-2">
                        <img src={serviceDecor2} alt="service decor 2"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="all-service-cards">
                        {servicesCardList.map((item) =>
                            <ServiceCard
                                key={item}
                                img={process.env.REACT_APP_API_URL + services[item].file}
                                title={services[item].title}
                                text={services[item].text}
                                borderTopColor={services[item].color }
                            ></ServiceCard>
                        )}
                    </div>
                </div>
                <div  className="services-we-provide__hidden-btn">
                    <ButtonStart>Get Started Today!</ButtonStart>
                </div>
            </div>
        </article>
    );
};

export default ServicesWeProvide;