import React from 'react';
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
    return (
        <article className="services-we-provide " id="services_we_provide">
            <div className="row ">
                <div className="col-md-6">

                    <Article
                        className={"article__title--decor-red"}
                        title={"Services We Provide"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus neque a mollis\n" +
                            "vestibulum. Aenean malesuada enim a nisi lacinia Lorem ipsum dolor sit amet, consectetur\n" +
                            "adipiscing elit. In maximus neque a mollis vestibulum. Aenean malesuada enim a nisi\n" +
                            "lacinia Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus neque a\n" +
                            "mollis vestibulum. Aenean malesuada enim a nisi lacinia"}
                    ></Article>
                    <div className="services-we-provide__btn-get-start">
                        <ButtonStart  >Get Started Today!</ButtonStart>
                    </div>
                    <div className="services-we-provide__decor-1">
                        <img src={serviceDecor1} alt="service decor 1"/>
                    </div>
                    <div className="services-we-provide__decor-2">
                        <img src={serviceDecor2} alt="service decor 2"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="all-service-cards">
                        {serviceList.map((item) =>
                            <ServiceCard
                                key={item.title}
                                img={item.img}
                                title={item.title}
                                text={item.text}
                                borderTopColor={item.color }
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