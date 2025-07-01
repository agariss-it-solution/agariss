


import React, { useState } from "react";
import "../pages/AppDevelopment.css";
import { Mousewheel } from "swiper/modules";
import enterPriceImg from "../pages/Images/wp9517044 1.png"
import imglogo from "../pages/Images/4411766 1.png"
import overlayImage from "../pages/Images/App Development.png";
import overlayImage1 from "../pages/Images/Frame 114.png";
import OverlayImg2 from "../pages/Images/Frame 1116607734.png"
import buttonlogo from "../pages/Images/Frame 1116607719.png"
import imgLeft from "../pages/Images/2221163 1.png"
import optionImg1 from "../pages/Images/Frame 1116607435.png"
import optionImg2 from "../pages/Images/Frame 1116607436.png"
import optionImg3 from "../pages/Images/Frame 1116607437.png"
import optionImg4 from "../pages/Images/Frame 1116607438.png"
import optionImg5 from "../pages/Images/Frame 1116607439.png"
import optionImg6 from "../pages/Images/Frame 1116607440.png"
import optionImg7 from "../pages/Images/Frame 1116607441.png"
import optionImg8 from "../pages/Images/Frame 1116607442.png"
import AgarisImg from "../pages/Images/Frame 1116607835.png"
import imgQuery from "../pages/Images/Frame 1116607742.png"

import frontendIcon from "../pages/Images/0a2d63a064c58946cb8d5f91f2cd9e4a33b0cf6f.png"
import backendIcon from "../pages/Images/08075dc55f5d66f96e51be1ec532fbc16c36738f.png";
import appIcon from "../pages/Images/378c5844c31b761153ed9da96ffa37b0bb410d5e.png";
import uiuxIcon from "../pages/Images/fcf6d2e1102389e7a2b3ff68c65d34f59748c5c3 (1).png";
import marketingIcon from "../pages/Images/397b3e38963968afd0acf9bb8532e157c7647a85.png";
import softwareIcon from "../pages/Images/80420e8341c732bbc27fdeaeec656869e2357132.png";
import ecommerceIcon from "../pages/Images/e0506f1f6aa9eaa002d609a657f84221b47491ef.png";
import desktopIcon from "../pages/Images/b31bf6fb534f40b69c39f2787044bfbfecd5e187.png";
import phpIcon from "../pages/Images/material-icon-theme_php.png";
import nodeIcon from "../pages/Images/logos_nodejs.png";
import dotnetIcon from "../pages/Images/skill-icons_dotnet.png";
import htmlIcon from "../pages/Images/Frame 1116607393.png"
import cssIcon from "../pages/Images/Group (3).png";
import reactIcon from "../pages/Images/Vector.png";
import flutterIcon from "../pages/Images/Group (1).png";
import reactNativeIcon from "../pages/Images/Vector (1).png";
import androidIcon from "../pages/Images/Vector (2).png";
import figmaIcon from "../pages/Images/Frame 1116607537.png";
import adobeXdIcon from "../pages/Images/logos_adobe-xd.png";
import sketchIcon from "../pages/Images/devicon_sketch.png";
import seoIcon from "../pages/Images/Group (2).png";
import semIcon from "../pages/Images/logos_semantic-ui.png";
import socialMediaIcon from "../pages/Images/noto_camera.png";
import emailMarketingIcon from "../pages/Images/Vector (3).png";
import pythonIcon from "../pages/Images/Group (3).png";
import javaIcon from "../pages/Images/skill-icons_java-dark.png";
import cppIcon from "../pages/Images/devicon_csharp.png";
import shopifyIcon from "../pages/Images/logos_shopify.png";
import wooIcon from "../pages/Images/devicon_woocommerce.png"
import laravelIcon from "../pages/Images/devicon_magento.png";
import service1 from "../pages/Images/Frame 132.png"
import service2 from "../pages/Images/Frame 133.png"
import service3 from "../pages/Images/Frame 134.png"
import service4 from "../pages/Images/Frame 129.png"
import service5 from "../pages/Images/Frame 130.png"
import service6 from "../pages/Images/Frame 131.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";


import electronIcon from "../pages/Images/fontisto_electronjs.png";

import appleIcon from "../pages/Images/lineicons_ios.png";
function Enterpricesolution() {
     
    const tools = [
        {
            icon: frontendIcon,
            label: "Front End",
            subTools: [
                { icon: htmlIcon, label: "HTML" },
                { icon: cssIcon, label: "CSS" },
                { icon: reactIcon, label: "React" },
            ],

        },
        {
            icon: backendIcon,
            label: "Back End",
            subTools: [
                { icon: phpIcon, label: "PHP" },
                { icon: nodeIcon, label: "Node.js" },
                { icon: dotnetIcon, label: ".NET" },
            ],
        },
        {
            icon: appIcon,
            label: "App",
            subTools: [
                { icon: flutterIcon, label: "Flutter" },
                { icon: reactNativeIcon, label: "React Native" },
                { icon: androidIcon, label: "Android" },
                { icon: appleIcon, label: "iOS" },
            ]
        },
        {
            icon: uiuxIcon,
            label: "UI/UX",
            subTools: [
                { icon: figmaIcon, label: "Figma" },
                { icon: adobeXdIcon, label: "Adobe XD" },
                { icon: sketchIcon, label: "Sketch" },
            ]
        },
        {
            icon: marketingIcon,
            label: "Digital Marketing",
            subTools: [
                { icon: seoIcon, label: "SEO" },
                { icon: semIcon, label: "SEM" },
                { icon: socialMediaIcon, label: "Social Media Marketing" },
                { icon: emailMarketingIcon, label: "Email Marketing" },
            ]
        },
        {
            icon: softwareIcon,
            label: "Software",
            subTools: [
                { icon: pythonIcon, label: "Python" },
                { icon: javaIcon, label: "Java" },
                { icon: cppIcon, label: "C++" },
                { icon: phpIcon, label: "PHP" },
            ]
        },
        {
            icon: ecommerceIcon,
            label: "E-commerce",
            subTools: [
                { icon: shopifyIcon, label: "Shopify" },
                { icon: wooIcon, label: "WooCommerce" },
                { icon: laravelIcon, label: "Laravel" },
                { icon: nodeIcon, label: "Node.js" },
            ]
        },
        {
            icon: desktopIcon,
            label: "Desktop Apps",
            subTools: [
                { icon: electronIcon, label: "Electron" },
                { icon: javaIcon, label: "Java" },
                { icon: pythonIcon, label: "Python" },
                { icon: dotnetIcon, label: ".NET" },
            ]
        },
    ];
    const servicesData = [
        {
            image: service1,
            title: "Cross-platform Apps",
            description: "Developing fast, reliable apps for iOS, Android, or both using native or cross-platform tools.",
        },
        {
            image: service2,
            title: "API Integration",
            description: "Smoothly connect apps to databases, servers, and third-party services.",
        },
        {
            image: service3,

            title: "App Store Optimization",
            description: "Boost your app’s visibility and downloads with smart listing strategies.",
        },
        {
            image: service4,
            title: "UI/UX for Mobile",
            description: "Designs that feel natural, look great, and keep users engaged.",
        },
        {
            image: service5,
            title: "Real-time Data Sync",
            description: "Live updates across devices for seamless user experience.",
        },
        {
            image: service6,
            title: "In-app Analytics Setup",
            description: "Track user actions and app performance with built-in analytics.",

        },

    ];
    const swiperOptions = [
        { image: optionImg1 },
        { image: optionImg2 },
        { image: optionImg3 },
        { image: optionImg4 },
        { image: optionImg5 },
        { image: optionImg6 },
        { image: optionImg7 },
        { image: optionImg8 },
    ];
    const faqs = [
        {
            question: " What are enterprise solutions?",
            answer:
                "Enterprise solutions are robust software systems that streamline and manage core business operations—like HR, finance, and sales—across departments in a unified platform.",
        },
        {
            question: " What types of enterprise solutions do you provide?",
            answer:
                "We deliver CRM, ERP, HRMS, inventory systems, dashboards, analytics tools, and internal communication platforms tailored to your business.",
        },
        {
            question: "Is the enterprise software customizable?",
            answer:
                "Yes, we build fully customized systems aligned with your business workflows, ensuring scalability and operational efficiency."
        },
        {
            question: " Can you integrate the software with our existing systems?",
            answer:
                "Absolutely. We offer seamless integration with legacy systems, third-party APIs, and existing databases to maintain data continuity.",
        },
        {
            question: " How secure are enterprise systems?",
            answer:
                "We implement strong security protocols including data encryption, secure login, role-based access, and compliance with industry standards.",
        },
    ];
    const [activeIndex, setActiveIndex] = useState(null);
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };


    const handleClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <div>
            <div className="position relative">
                <img
                    src={enterPriceImg}
                    alt="App Development"
                    className="img-fluid w-100"
                    style={{ height: "auto" }}
                />

                {/* Overlay Image */}
                <img
                    src={overlayImage}
                    alt="Overlay"
                    className="img-fluid position-absolute"
                    style={{
                        top: "25%",
                        left: "5%",
                        width: "40vw", // responsive width
                        maxWidth: "460px", // limit on larger screens
                        height: "auto",
                    }}
                />

                {/* Overlay Image 2 */}
                <img
                    src={overlayImage1}
                    alt="Overlay 1"
                    className="img-fluid position-absolute"
                    style={{
                        top: "40%",
                        left: "5%",
                        width: "25vw",
                        maxWidth: "277px",
                        height: "auto",
                    }}
                />
            </div>

            <div className="container">
                <div className="d-flex justify-content-center align-items-center text-secondary row pt-4">
                    <h2>
                        <span className="highlight ">Strategic Enterprise</span>  IT Solutions for Growing Businesses

                    </h2>
                    <div className="col-lg-6 col-md-12  text-start fs-4 text-secondary mb-4">
                        <p>
                            Agariss creates scalable enterprise solutions to streamline operations, enhance communication, and boost productivity. We develop custom ERP and CRM solutions, integrating them with your existing tools.
                        </p>
                        <img
                            src={buttonlogo}
                            alt="App Button Logo"
                            className="img-fluid mt-3"
                            style={{ maxWidth: "200px" }}
                        />
                    </div>

                    {/* Image Section */}
                    <div className="col-lg-6 col-md-12 text-center px-4">
                        <img
                            src={imglogo}
                            alt="App Development"
                            className="img-fluid"
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    </div>
                </div>
                <h2 className="offer-heading    fs-sm-5 text-center text-center text-secondary ">Services We Offer</h2>
                <p className="offer-description text-center  fs-4 text-secondary mb-4">
                    Integrated platforms to streamline complex business operations.
                </p>
                <div className=" row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <img src={imgLeft} alt="Service Visual" className="img-fluid" />
                    </div>
                <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                           <Swiper
                             direction="vertical"
                             slidesPerView={3}
                             spaceBetween={20}
                             mousewheel={true}
                             modules={[Mousewheel]}
                             className="option-swiper w-100"
                           >
                             {swiperOptions.map((option, index) => (
                               <SwiperSlide key={index}>
                                 <div className="d-flex align-items-center justify-content-center" style={{ height: "150px" }}>
                                   <img
                                     src={option.image}
                                     alt={`Option ${index + 1}`}
                                     className="option-icon img-fluid"
                                     style={{
                                       width: '100%',
                                       maxWidth: '600px',
                                       height: '100%',
                                       objectFit: 'contain',
                                       boxShadow: 'none' // ensures no shadow
                                     }}
                                   />
                                 </div>
                               </SwiperSlide>
                             ))}
                           </Swiper>
                         </div>


                </div>

                <div className="tools-section bg-color">
                    <h2 className="offer-heading fs-sm-5 text-center  text-secondary bg-color">
                        Technologies We Use
                    </h2>
                    <div className="row justify-content-center gx-4 gy-4 tools-grid bg-color">
                        <div className="col-12 text-center mb-4">
                            {tools.map((tool, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleClick(index)}
                                    className={`d-inline-block mx-2 fw-semibold ${activeIndex === index ? 'active-tab' : ''}`}
                                    style={{ cursor: 'pointer', textDecoration: activeIndex === index ? 'underline' : 'none' }}
                                >
                                    <img src={tool.icon} alt={tool.label} style={{ width: "100px", height: "100px" }} />
                                    <div className="text-secondary text-center mt-4">{tool.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="row justify-content-center gx-4 gy-4  ">
                        {activeIndex !== null && tools[activeIndex].subTools && (
                            <div className="d-flex justify-content-center flex-wrap mt-3 subtools-inline">
                                {tools[activeIndex].subTools.map((sub, subIndex) => (
                                    <div
                                        key={subIndex}
                                        className="d-flex flex-column align-items-center subtool-icon mx-2"
                                        style={{ width: "100px" }}
                                    >
                                        <img
                                            src={sub.icon}
                                            alt=""
                                            style={{ width: "100px", height: "100px", objectFit: "contain" }}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>


                <div>
                    <h2 className="offer-heading fs-1 fs-md-5 text-center  pt-4 pb-4 text-secondary">
                        Our Expertise in SMTP Services
                    </h2>

                    <Swiper
                        spaceBetween={30}
                        loop={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                            576: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                            768: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                            992: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                            },
                        }}
                        modules={[Autoplay]}
                    >
                        {servicesData.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-3 text-center h-100" style={{ background: "transparent" }}>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="img-fluid mb-3"
                                        style={{ maxHeight: "200px", objectFit: "contain" }} // make image taller
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
                <div className="position-relative text-center">
                    <img src={AgarisImg} alt="Example Image" className="img-fluid w-100" />
                    <img
                        src={OverlayImg2}
                        alt="App Button Logo"
                        className="position-absolute top-50 start-50 translate-middle img-fluid"
                        style={{ maxWidth: "100px" }}
                    />
                </div>
                <div className="faq-division py-5 px-4 bg-transparent">
                    <div className="faq-section container">
                        <h2 className="offer-heading fs-1 text-center text-secondary mb-5">
                            Frequently Asked Questions
                        </h2>

                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${openQuestion === index ? "active" : ""} p-4 mb-4 border rounded`}
                                onClick={() => toggleQuestion(index)}
                            >
                                <div className="faq-question d-flex align-items-center fw-semibold text-secondary fs-4">
                                    <span className="faq-number me-2">{index + 1}.</span> {faq.question}
                                </div>

                                <div
                                    className={`faq-answer mt-3 fs-5 text-muted ${openQuestion === index ? "show" : "collapse"}`}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        ))}

                        <div className="faq-cta text-center mt-5">
                            <img
                                src={imgQuery}
                                alt="Service Visual"
                                className="img-fluid"
                                style={{ maxWidth: "450px" }}
                            />
                        </div>
                    </div>
                </div>

           
            </div>

        </div>
    );
}

export default Enterpricesolution;