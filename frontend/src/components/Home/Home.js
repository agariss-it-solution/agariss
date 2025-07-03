import { Pagination } from "swiper/modules";
import React, { useState, useEffect, useRef } from "react";
import "./Home.css";

import officeImage from "../Images/office-reception-concept-illustration 1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import service1 from "../Images/Property 1=Frame 47.png"
import service2 from "../Images/Front (1).png"
import service3 from "../Images/Property 1=Frame 49.png"
import service4 from "../Images/Property 1=Frame 50.png"
import service5 from "../Images/Property 1=Frame 51.png"
import service6 from "../Images/Front (2).png"
import service7 from "../Images/Property 1=Frame 53.png"
import frontendIcon from "../Images/08075dc55f5d66f96e51be1ec532fbc16c36738f.png";
import backendIcon from "../Images/0a2d63a064c58946cb8d5f91f2cd9e4a33b0cf6f.png";
import appIcon from "../Images/378c5844c31b761153ed9da96ffa37b0bb410d5e.png";
import uiuxIcon from "../Images/fcf6d2e1102389e7a2b3ff68c65d34f59748c5c3 (1).png";
import marketingIcon from "../Images/397b3e38963968afd0acf9bb8532e157c7647a85.png";
import softwareIcon from "../Images/80420e8341c732bbc27fdeaeec656869e2357132.png";
import ecommerceIcon from "../Images/e0506f1f6aa9eaa002d609a657f84221b47491ef.png";
import desktopIcon from "../Images/b31bf6fb534f40b69c39f2787044bfbfecd5e187.png";
import phpIcon from "../Images/material-icon-theme_php.png";
import nodeIcon from "../Images/logos_nodejs.png";
import dotnetIcon from "../Images/skill-icons_dotnet.png";
import htmlIcon from "../Images/Frame 1116607393.png";
import cssIcon from "../Images/Group.png";
import reactIcon from "../Images/Vector.png";
import flutterIcon from "../Images/Group (1).png";
import reactNativeIcon from "../Images/Vector (1).png";
import androidIcon from "../Images/Vector (2).png";
import figmaIcon from "../Images/Frame 1116607537.png";
import adobeXdIcon from "../Images/logos_adobe-xd.png";
import sketchIcon from "../Images/devicon_sketch.png";
import seoIcon from "../Images/Group (2).png";
import semIcon from "../Images/logos_semantic-ui.png";
import socialMediaIcon from "../Images/noto_camera.png";
import emailMarketingIcon from "../Images/Vector (3).png";
import pythonIcon from "../Images/Group (3).png";
import javaIcon from "../Images/skill-icons_java-dark.png";
import cppIcon from "../Images/devicon_csharp.png";
import Project1 from "../Images/Frame 1116607863.png"
import Project2 from "../Images/Frame 1116607864.png"
import Project3 from "../Images/Screenshot_2025-05-03_171024-removebg-preview 1.png";
import Project1hover from "../Images/Property 1=Variant2.png";
import Project2hover from "../Images/Property 1=Variant2 (1).png";
import shopifyIcon from "../Images/logos_shopify.png";
import wooIcon from "../Images/devicon_woocommerce.png";
import laravelIcon from "../Images/devicon_magento.png";
import electronIcon from "../Images/fontisto_electronjs.png";
import appleIcon from "../Images/lineicons_ios.png";
import brainIcon from "../Images/Vector (6).png"
import RoketIcon from "../Images/Frame 1116607900.png"
import lockIcon from "../Images/Vector (5).png"
import handIcon from "../Images/Vector (7).png"
import moenyIcon from "../Images/Group (4).png"
import Footer from "../Footer/footer"
import {

    Col,
    Row,
    Card,

} from "react-bootstrap";


const servicesData = [
    {
        image: service1,
        link: "/web-development",
        title: "Web Development",
        description: "Building fast, responsive, and scalable websites tailored to your business needs, with cutting-edge design and seamless functionality.",
    },
    {
        image: service2,
        link: "/app-development",
        title: "App Development",
        description:
            "Creating high-performance, user-friendly mobile applications with intuitive interfaces and reliable backend systems for iOS and Android.",
    },
    {
        image: service3,
        link: "/ui-ux-design",
        title: "UI/UX Design",
        description:
            "Crafting engaging, user-centric interfaces that blend aesthetics and usability, ensuring a smooth and delightful user experience",
    },
    {
        image: service4,
        link: "/software-development",

        title: "Software Development",
        description:
            "Delivering customized software solutions that automate operations, enhance productivity, and support long-term business goals.",
    },
    {
        image: service5,
        link: "/ecommerce-development",

        title: "E-Commerce Development",
        description:
            "Developing secure, conversion-optimized e-commerce platforms to boost online sales and provide seamless shopping experiences.",
    },
    {
        image: service6,
        link: "/digital-marketing",

        title: "Digital Marketing",
        description:
            "Driving growth through data-driven digital marketing strategies, including SEO, social media, content, and paid campaigns",
    },
    {
        image: service7,
        link: "/desktop-apps",

        title: "Desktop App Development",
        description:
            "Building powerful and efficient desktop applications with smooth performance, custom features, and cross-platform support.",
    },
]
const craft = [
    {
        label: 'Business-Aligned Development',
        description:
            'Every line of code has a purpose. We align technology with your vision, boosting efficiency, unlocking new revenue streams, and enhancing user experience.',
        icon: brainIcon, // You can use different icons per service if needed
    },
    {
        label: 'Fast, Flexible Delivery',
        description:
            'Speed without compromise. Leveraging Agile workflows and AI-assisted tools, we deliver high-quality solutions that evolve with your business needs.',
        icon: RoketIcon, // You can use different icons per service if needed
    },
    {
        label: 'Built-In Security & Compliance',
        description:
            'From design to deployment, we integrate cybersecurity and data privacy best practices — keeping your business safe, compliant, and ready for the future.',
        icon: lockIcon, // You can use different icons per service if needed
    },
    {
        label: 'Transparent, Long Term Partnerships',
        description:
            ' We don’t disappear after delivery. With proactive support, clear communication, and continuous optimization, we remain committed to your long-term success.',
        icon: handIcon, // You can use different icons per service if needed
    },
    {
        label: 'Cost-Effective, High Impact Solutions',
        description:
            '  By leveraging automation, open-source tools, and lean frameworks, we keep costs down while delivering solutions that generate real ROI.',
        icon: moenyIcon, // You can use different icons per service if needed
    },

];
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
        ],
    },
    {
        icon: uiuxIcon,
        label: "UI/UX",
        subTools: [
            { icon: figmaIcon, label: "Figma" },
            { icon: adobeXdIcon, label: "Adobe XD" },
            { icon: sketchIcon, label: "Sketch" },
        ],
    },
    {
        icon: marketingIcon,
        label: "Digital Marketing",
        subTools: [
            { icon: seoIcon, label: "SEO" },
            { icon: semIcon, label: "SEM" },
            { icon: socialMediaIcon, label: "Social Media Marketing" },
            { icon: emailMarketingIcon, label: "Email Marketing" },
        ],
    },
    {
        icon: softwareIcon,
        label: "Software",
        subTools: [
            { icon: pythonIcon, label: "Python" },
            { icon: javaIcon, label: "Java" },
            { icon: cppIcon, label: "C++" },
            { icon: phpIcon, label: "PHP" },
        ],
    },
    {
        icon: ecommerceIcon,
        label: "E-commerce",
        subTools: [
            { icon: shopifyIcon, label: "Shopify" },
            { icon: wooIcon, label: "WooCommerce" },
            { icon: laravelIcon, label: "Laravel" },
            { icon: nodeIcon, label: "Node.js" },
        ],
    },
    {
        icon: desktopIcon,
        label: "Desktop Apps",
        subTools: [
            { icon: electronIcon, label: "Electron" },
            { icon: javaIcon, label: "Java" },
            { icon: pythonIcon, label: "Python" },
            { icon: dotnetIcon, label: ".NET" },
        ],
    },
];

const Home = () => {
    const words = ["Software", "website", "Ui/Ux development", "Application", "E-commerce"];
    const subtoolsRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    const [currentWord, setCurrentWord] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animate, setAnimate] = useState(false);
    const [flippedCards, setFlippedCards] = useState(new Set());

    const flipResetTimer = useRef(null);
    const navigate = useNavigate();

    const handleImageClick = (index) => {
        const updatedSet = new Set(flippedCards);

        if (flippedCards.has(index)) {
            updatedSet.delete(index);
        } else {
            updatedSet.add(index);
        }

        setFlippedCards(updatedSet);

        // Clear any existing timer before starting a new one
        if (flipResetTimer.current) {
            clearTimeout(flipResetTimer.current);
        }

        flipResetTimer.current = setTimeout(() => {
            setFlippedCards(new Set());
        }, 10000);
    };





    useEffect(() => {



        const interval = setInterval(() => {
            setAnimate(false);
            setTimeout(() => {
                setCurrentWord((prev) => (prev + 1) % words.length);
                setAnimate(true);
            }, 1000); // hold word for 2s
        }, 1000); // cycle: 2s hold + 2s scroll

        return () => clearInterval(interval);
    }, []);


    const handleClick = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
        setTimeout(() => {
            if (subtoolsRef.current && window.innerWidth <= 768) {
                subtoolsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100); // slight delay helps with rendering timing
    };
    const handleRedirect = (link) => {
        navigate(link);
    };
console.log("hi");
    return (
        <div className="grid-container">
            <div className=" bg-color py-5">
                {/* Hero Section */}
                <div className=" align-items-center ">
                    <div className=" text-center px-3"> {/* Centering the text */}
                        <h2 className=" px-lg-5 w-lg-50 m-auto responsive-title fw-normal text-heading ">
                            <span className="highlight-yellow  fw-normal">We don’t Write code</span> — we write clarity. Tech that works,
                            Solutions that grow.
                        </h2>
                        <p className="lead  fs-6 fs-lg-1 mt-3 fw-semibold  " style={{ color: "#666666" }}>
                            "Swift. Seamless. Smarter. Agariss IT crafts bespoke digital solutions that power your business forward."
                        </p>
                    </div>
                </div>

                <div className="">
                    <div className="text-center">
                        <img
                            src={officeImage}
                            alt="Agariss Office"
                            className="img-fluid p-0" // Use custom margin class
                        />
                        <h2 className="pt-5 fw-normal fs-5 fs-lg-2 text-center custom-text custom-top-margin">
                            A Trusted Place to Transform <br />
                            Your Ideas into{" "}
                            <span
                                className="d-inline-block text  text-center text-lg-start"
                                style={{

                                    display: "inline-block",
                                    // minWidth: "250px",     
                                    // height: "40px",        
                                    overflow: "hidden",
                                    verticalAlign: "bottom",
                                }}
                            >
                                <span
                                    key={currentWord} // important for re-triggering animation
                                    style={{
                                        display: "inline-block",
                                        animation: "fadeIn 0.3s ease-in-out",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {words[currentWord]}
                                </span>
                            </span>
                        </h2>




                    </div>
                </div>
                {/* Services Section */}
                <div>
                    <div className="  my-5 py-lg-5 servise-color">
                        {" "}
                        {/* Replaced <section> with <div> */}
                        <h2 className="text-center responsive-heading highlight-yellow fw-medium pt-4  mb-3 text-service">
                            Our Services
                        </h2>
                        <p className="text-center fs-5 fs-lg-1 fw-medium  text-servise-subheading  mb-4">
                            Empowering Your Vision with Tailored IT Solutions — From Idea to
                            Execution
                        </p>
                        <div className="swiper-wrapper- container">
                            <Swiper
                                modules={[Pagination]}
                                spaceBetween={0} // Removed gap
                                slidesPerView={1}
                                slidesPerGroup={1}
                                pagination={{ clickable: true }}
                                breakpoints={{
                                    576: { slidesPerView: 2, slidesPerGroup: 2 },
                                    992: { slidesPerView: 3, slidesPerGroup: 3 },
                                }}
                                className="custom-swiper"
                            >
                                {servicesData.map((service, index) => (
                                    <SwiperSlide key={index} className="d-flex justify-content-center">
                                        <div className="card-rectangle">
                                            <div
  className={`image-flip-inner ${flippedCards.has(index) ? "flipped" : ""}`}
  onClick={(e) => {
    // 👉 Prevent flip if the button/link is clicked
    if (e.target.closest(".custom-service")) return;
    handleImageClick(index);
  }}
  role="button"
  tabIndex={0}
>

                                                <div className="image-front">
                                                    <img
                                                        src={service.image}
                                                        alt={service.title}
                                                        className="custom-img-height"
                                                    />
                                                    <div className="image-text-overlay responsive-heading">{service.title}</div>
                                                </div>
                                                <div className="image-back  image-back img flex-column justify-content-center align-items-center p-2">
                                                    <p
                                                        className="description-text mb-0"
                                                        style={{
                                                            // maxWidth: "265px",
                                                            // maxHeight: "290px",
                                                            fontWeight: "normal",
                                                            fontSize: "22px",
                                                        }}
                                                    >
                                                        {service.description}
                                                    </p>
                                                    <button
                                                        className="btn btn-outline-dark custom-service"
                                                        onClick={(e) => {
                                                            e.stopPropagation(); // Prevent flip trigger
                                                            e.preventDefault(); // Prevent default behavior
                                                            navigate(service.link); // Navigate using React Router
                                                        }}
                                                    >
                                                        Know More
                                                    </button>


                                                </div>
                                            </div>




                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>



                    </div>
                </div>

                <div className="container my-5 bg-color py-lg-5">
                    <div className="py-lg-5 mt-lg-5">
                        <h2 className="text-center highlight-yellow responsive-heading fw-medium   bg-color text-service">The Tools Behind Your Success</h2>
                        <p className="text-center fw-medium fs-5 fs-lg-1  text-servise-subheading mb-4  bg-color">
                            Empowering your growth with future-ready, scalable tech solutions.
                        </p>
                    </div>
                    <div className=" justify-content-center mb-4 tools-grid bg-color">
                        <div className="col-12 p-3 text-center mb-4">
                            {tools.map((tool, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleClick(index)} // Set active index on click
                                    className={`d-inline-block px-5 px-lg-6 fw-semibold ${activeIndex === index ? 'active-tab' : ''}`}
                                    style={{ cursor: 'pointer', textDecoration: "none" }}
                                >
                                    <img src={tool.icon} alt={tool.label} style={{ width: "80px", height: "80px" }} />
                                    <div className={`fw-normal subtext  text-center mt-3 mb-3 ${activeIndex === index ? 'active' : ''}`}>
                                        {tool.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr />
                    <div className="justify-content-center gx-4 gy-4" ref={subtoolsRef}>
                        {activeIndex !== null && tools[activeIndex].subTools && (
                            <div className="d-flex justify-content-center flex-wrap mt-3 subtools-inline">
                                {tools[activeIndex].subTools.map((sub, subIndex) => (
                                    <div key={subIndex} className="d-flex flex-column align-items-center subtool-icon mx-4 mt-4 mb-4 " style={{ width: "100px" }}>
                                        <img src={sub.icon} alt={sub.label} className="mb-1" style={{ width: "80px", height: "80px", objectFit: "contain" }} />
                                        <div className="fw-normal subtext text-center text-center">{sub.label}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
                <div className="portfolio-section container my-5 ">
                    <h2 className="portfolio-heading highlight-yellow responsive-heading text-center pt-lg-3  text-service fw-medium mb-3">Crafting Your Digital Legacy</h2>
                    <p className="portfolio-subheading text-center pb-lg-5  fs-5 fs-lg-1 text-servise-subheading fw-medium  mb-4">
                        Showcasing your vision with innovative, impactful design solutions.
                    </p>

                    <div className="row py-lg-5 justify-content-center">
                        <div className="col-md-4 col-sm-6 mb-4 text-center">
                            <div className="image-container">
                                <img
                                    src={Project1}
                                    alt="Project 1"
                                    className="main-img img-fluid"
                                />

                                <div className="hover-content">
                                    <h2 className="pb-5 fs-1 fs-lg-1">Green Walk</h2>
                                    <p>
                                        A wellness-focused mobile app designed to encourage daily
                                        walking habits with engaging step tracking, achievement
                                        badges, and clean UI for all age groups.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4 text-center">
                            <div className="image-container">
                                <img
                                    src={Project2}
                                    alt="Project 1"
                                    className="main-img img-fluid"
                                />

                                <div className="hover-content">
                                    <h2 className="pb-5 fs-1 fs-lg-1">Event Management System</h2>
                                    <p>
                                        A dynamic and user-friendly website offering end-to-end
                                        event planning, showcasing services, vendor listings, blogs,
                                        and a smooth client onboarding process.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 mb-4 text-center">
                            <div className="">
                                <img src={Project3} alt="Project 3" className="img-fluid " />
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-closing text-center my-5 ">
                        <h3 className="closing-title highlight-yellow text-center responsive-heading fw-medium text-service  mb-3">Why Prestigious Brands Trust Our Craft</h3>
                        <p className="closing-subtext fw-medium pb-lg-5 fs-5 fs-lg-1 text-servise-subheading ">
                            Smart Design. Meaningful Impact. Partnerships That Last.
                        </p>
                    </div>
                </div>


                <div className="container ">
                    <Row className="px-lg-5 px-2 d-flex justify-content-center">
                        {craft.map((service, index) => (
                            <Col
                                key={index}
                                xs={12}        // 1 per row on mobile
                                md={6}         // 2 per row on tablet and above
                                className="mb-4 d-flex justify-content-center"
                            >
                                <Card className="p-3 p-lg-4 shadow-sm card-details">
                                    <img
                                        src={service.icon}
                                        alt="icon"
                                        className="img-fluid"
                                        style={{ maxWidth: '80px', height: 'auto' }}
                                    />

                                    <div className="card-heading mb-2">
                                        {service.label}
                                    </div>

                                    <p className="card-text fw-normal mb-0">
                                        {service.description}
                                    </p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>




                <Footer />


            </div>
        </div>
    );
};

export default Home;



