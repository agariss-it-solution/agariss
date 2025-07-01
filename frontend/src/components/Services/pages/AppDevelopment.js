import React, { useState, useRef, useEffect } from "react";
import "../pages/AppDevelopment.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mousewheel, Scrollbar } from "swiper/modules";
import iconImg from "../pages/Images/righticon.png"

import appImage from "../pages/Images/wp9517044 1.png";
import imglogo from "../pages/Images/4411766 1.png";
import imgLeft from "../pages/Images/2221163 1.png";
import optionImg1 from "../pages/Images/uiux.png"
import optionImg2 from "../pages/Images/icons8-frontend-100.png"
import optionImg3 from "../pages/Images/backend.png"
import optionImg4 from "../pages/Images/feature integration.png"
import optionImg5 from "../pages/Images/app store publishing.png"
import optionImg6 from "../pages/Images/icons8-online-maintenance-portal-100.png"
import optionImg7 from "../pages/Images/post_launch-removebg-preview 1 (1).png"
import optionImg8 from "../pages/Images/SEO-removebg-preview 1 (1).png"
import AgarisImg from "../pages/Images/ui-ux-representations-with-smartphone 1.png"

import Footer from "../../Footer/footer"

import frontendIcon from "../pages/Images/0a2d63a064c58946cb8d5f91f2cd9e4a33b0cf6f.png";
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
import htmlIcon from "../pages/Images/Frame 1116607393.png";
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
import wooIcon from "../pages/Images/devicon_woocommerce.png";
import laravelIcon from "../pages/Images/devicon_magento.png";
import service1 from "../pages/Images/cross-platform 1.png";
import service2 from "../pages/Images/image 8.png";
import service3 from "../pages/Images/ux-design 1.png";
import service4 from "../pages/Images/cloud-computing (1) 1.png";
import service5 from "../pages/Images/cloud-computing (1) 1.png";
import service6 from "../pages/Images/smartphone 1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

import electronIcon from "../pages/Images/fontisto_electronjs.png";

import appleIcon from "../pages/Images/lineicons_ios.png";

function AppDevelopment() {
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
  const featuresData = [
    {
      image: service1,
      title: "Cross-platform Apps",
      description:
        "Developing fast, reliable apps for iOS, Android, or both using native or cross-platform tools.",
    },
    {
      image: service2,
      title: "API Integration",
      description:
        "Smoothly connect apps to databases, servers, and third-party services.",
    },
    {
      image: service3,
      title: "App Store Optimization ",
      description:
        "Boost your app’s visibility and downloads with smart listing strategies.",
    },
    {
      image: service4,
      title: "UI/UX for Mobile",
      description:
        "Designs that feel natural, look great, and keep users engaged.",
    },
    {
      image: service5,
      title: "Real-time Data Sync",
      description: " Live updates across devices for seamless user experience.",
    },
    {
      image: service6,
      title: "In-app Analytics Setup",
      description:
        "Track user actions and app performance with built-in analytics.",
    },
  ];
  const swiperOptions = [
    {
      title: "UI/UX Design",
      description:
        "User-centered design for seamless and engaging app experiences.",
      icon: optionImg1,
    },
    {
      title: "Frontend Development",
      description: "Interactive and responsive app interfaces for iOS and Android.",
      icon: optionImg2,
    },
    {
      title: "Backend Development",
      description: "Robust server-side logic, database handling, and integrations.",
      icon: optionImg3,
    },
    {
      title: "Feature Integration",
      description:
        "Login, payments, notifications, and third-party API support.",
      icon: optionImg4,
    },
    {
      title: "App Store Publishing",
      description: "Deployment on Google Play and Apple App Store.",
      icon: optionImg5,
    },
    {
      title: "App Testing",
      description: " Comprehensive manual and automated testing.",
      icon: optionImg6,
    },
    {
      title: "Ongoing Maintenance",
      description: "Regular updates, bug fixes, and performance enhancements.",
      icon: optionImg7,
    },
    {
      title: "Post-launch Maintenance",
      description: " Ongoing support, updates, and improvements.",
      icon: optionImg8,
    },
  ];






  const faqs = [
    {
      question: "How much does it cost to develop a mobile app?",
      answer:
        "The cost depends on the app’s features, complexity, platform, and design. We provide a custom quote after discussing your project requirements.",
    },
    {
      question: "How long does it take to build an app?",
      answer:
        "Basic apps typically take 4–6 weeks, while complex apps may take 2–4 months, depending on functionality and feedback cycles.",
    },
    {
      question: "Do you build both Android and iOS apps?",
      answer:
        "Yes, we develop both native (Android/iOS) and cross-platform apps to ensure broad reach and efficient development.",
    },
    {
      question: "Can you integrate payment gateways and third-party APIs?",
      answer:
        "Absolutely. We support integrations like Razorpay, Stripe, Google Maps, chat systems, SMS, social logins, and more.",
    },
    {
      question: "Will my app be secure and scalable?",
      answer:
        "Yes, we use industry best practices for security and build scalable backends that grow with your user base.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(null);
  const [direction, setDirection] = useState("vertical");

  const subtoolsRef = useRef(null);


  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setDirection("horizontal"); // Mobile
    } else {
      setDirection("vertical"); // Tablet & Desktop
    }
  };
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
    handleResize(); // initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
    setTimeout(() => {
      if (subtoolsRef.current && window.innerWidth <= 768) {
        subtoolsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // slight delay helps with rendering timing
  };

  return (
    <div className="overflow-hidden">
      <div className="position-relative w-100">
        <img
          src={appImage}
          alt="Web Development"
          className="img-fluid w-100"
          style={{ objectFit: "cover", height: "auto", maxHeight: "100vh" }}
        />

        {/* Optional overlay for better contrast */}
        <div
          className="position-absolute w-100 h-100"
          style={{
            // backgroundColor: "rgba(0, 0, 0, 0.3)",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />

        {/* Heading */}
        <h2 className="hero-heading"
          data-aos="fade-right">App Development </h2>

        {/* Breadcrumb */}
        <div className="hero-breadcrumb p-2 fs-8 fs-lg-3" data-aos="fade-right" >Services /App Development</div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center coustum-app fw-medium  row pt-4">
          <h2 className="responsive-title" data-aos="fade-down">
            <span className="highlight ">High-Performance</span> Custom App Development
            Services
          </h2>
          <div className="col-lg-6 col-md-12 coustum-tite  fs-6 fs-lg-1 text-start fw-normal  mb-4 " data-aos="fade-right">
            <p>
              <strong>Agariss</strong> turns your mobile app idea into a
              functional, user-friendly application. We help startups and
              businesses scale through intuitive Android and iOS apps. We build
              feature-rich applications tailored to your business goals—native
              or cross-platform.
            </p>
            <div className="d-flex justify-content-start fw-medium mt-3 " data-aos="fade-up">
              <Link
                to="/contact"
                className="btn fw-semibold text-white text-nowrap transition"
                style={{
                  backgroundColor: "#B88338",
                  fontSize: "clamp(0.8rem, 2.5vw, 20px)",
                  padding: "10px 20px",
                  borderRadius: "30px",
                  transition: "transform 0.3s ease-in-out", // smooth animation
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                Start Your Project
              </Link>
            </div>

          </div>

          {/* Image Section */}
          <div className="col-lg-6 col-md-12 text-center px-4 " data-aos="fade-left">
            <img
              src={imglogo}
              alt="App Development"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div data-aos="fade-down" >
          <h2 className="offer-heading fs-6 responsive-heading fw-semibold text-center coustum-app "> Services We Offer</h2>
          <p className="offer-description fs-6 fs-lg-1 text-center coustum-tite  fw-normal  slide-in-top mb-4">
            Custom mobile apps with intuitive design and scalable performance.
          </p>
        </div >
        <div className=" row">
          <div className="col-lg-6 col-md-8 col-12 " data-aos="fade-right">
            <img src={imgLeft} alt="Service Visual" className="img-fluid" />
          </div>
          <div className=" col-lg-6 col-12 " data-aos="fade-left">
            <Swiper
              direction={direction}
              navigation={true}
              mousewheel={{ releaseOnEdges: true }}
              spaceBetween={20}
              modules={[Navigation, Scrollbar, Mousewheel]}
              style={{ marginLeft: "-11px" }}
              className="feature-swiper custom-swiper-height"
              breakpoints={{
                0: {
                  slidesPerView: 1, // 1 slide on mobile
                },
                768: {
                  slidesPerView: 2, // 2 slides on tablets
                },
                992: {
                  slidesPerView: 3, // 3 slides on desktops
                },
              }}
            >
              {swiperOptions.map((feature, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="p-3 custom-swiper-height d-flex align-items-center gap-2 text-start rounded"
                    style={{
                      background: "#FFFAFA",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    }}
                  >
                    {/* Image with responsive size */}
                    <img
                      src={feature.icon}
                      alt="icon"
                      className="img-fluid d-block d-sm-inline"
                      style={{
                        width: "100px", // You can adjust this size as needed
                      }}
                    />

                    {/* Text content with responsive classes */}
                    <div className="ms-2">
                      <h6 className="mb-1 fw-semibold fs-6 d-none d-sm-block">
                        {feature.title}
                      </h6>
                      <h6 className="mb-1 fw-semibold fs-6 d-block d-sm-none">
                        {/* Smaller heading on mobile */}
                        <small>{feature.title}</small>
                      </h6>

                      <p className="mb-0 swiper-color fs-6 d-none d-sm-block">
                        {feature.description}
                      </p>
                      <p className="mb-0 swiper-color fs-6 d-block d-sm-none">
                        {/* Smaller text on mobile */}
                        <small>{feature.description}</small>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>




        </div>

        <div className="tools-section bg-color">
          <h2 className="offer-heading  text-center coustum-app  responsive-heading  bg-color py-4 mt-4 mb-4" data-aos="fade-right">
            Technologies We Use
          </h2>
          <div className=" justify-content-center mb-4 tools-grid bg-color">
            <div className="col-12  text-center mb-4">
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
        <div>
          <h2 className="offer-heading fw-medium responsive-heading text-center">
            Our Expertise in Web Development
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
            {featuresData.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="p-lg-3 p-3  text-center h-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="img-fluid mb-3 responsive-service-img"
                    style={{ maxHeight: "120px", objectFit: "contain" }}
                  />
                  <h5 className="fw-semibold service-title fs-5 fs-lg-1">{service.title}</h5>
                  <p className="fw-normal service-desccription fs-6 fs-lg-1">{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="faq-cta text-center mt-5">

          <Link
            to="/contact"
            className="btn fw-semibold text-white text-nowrap transition"
            style={{
              backgroundColor: "#B88338",
              fontSize: "clamp(0.8rem, 2.5vw, 25px)",
              padding: "10px 20px",
              borderRadius: "30px",
              transition: "transform 0.3s ease-in-out", // smooth animation
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Request a Callback
          </Link>

        </div>
        <div className="position-relative text-center ">
          <div className="container my-5">

            <div class=" text-lg-center mb-5">
              <h2 class="fw-semibold web-title  fs-5 fs-lg-2 " data-aos="fade-down" >Why Choose Agariss for Web Development?</h2>
            </div>
            <div className="row g-4 d-flex justify-content-center align-items-center" >
              {/* LEFT COLUMN */}
              <div className="col-12 col-lg-4 web-text" data-aos="fade-right">
                <div className="d-flex flex-column gap-3">
                  {[
                    { title: "Creative Approach", desc: "We design user-friendly apps that stand out." },
                    { title: "Tech-Driven Builds", desc: "Built with the latest tools and frameworks." },
                    { title: "Scalable Solutions", desc: "Apps that grow with your business needs." },
                    { title: "Stability First", desc: "Bug-free, reliable performance every time." },
                  ].map((item, i) => (
                    <div className="p-lg-3 d-flex align-items-start fs-6 gap-3" key={i}>
                      <img src={iconImg} alt="Icon" style={{ width: "40px", height: "40px" }} />
                      <div>
                        <h5 className="fw-semibold fs-6 fs-lg-1 text-start mb-1">{item.title}</h5>
                        <p className="mb-0 fw-normal text-start fs-7 fs-lg-3">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CENTER IMAGE */}
              <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center text-center">
                <img
                  src={AgarisImg}
                  alt="Center Visual"
                  className="img-fluid center-feature-img"
                  style={{ maxWidth: "130%", height: "auto", maxHeight: "350px", }}
                />
              </div>


              {/* RIGHT COLUMN */}

              <div className="col-12 col-lg-4 web-text" data-aos="fade-left"  >

                <div className="d-flex flex-column gap-3" >
                  {[
                    { title: "User-Centric Design", desc: "Intuitive interfaces that enhance engagement." },
                    { title: "High Conversion Focus", desc: "One build, multiple platforms—iOS & Android." },
                    { title: "Cross-Platform Support", desc: "Projects delivered within set deadlines." },
                    { title: "Dedicated Support", desc: "Post-launch help whenever you need it." },
                  ].map((item, i) => (
                    <div className="p-lg-3 d-flex align-items-start fs-6 gap-3" key={i}>
                      <img src={iconImg} alt="Icon" style={{ width: "40px", height: "40px" }} />
                      <div>
                        <h5 className="fw-semibold fs-6 fs-lg-1 text-start mb-1">{item.title}</h5>
                        <p className="mb-0 fw-normal text-start fs-7 fs-lg-3">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-division fw-semibold py-5 px-lg-4 bg-transparent">
          {/* Heading */}
          <div data-aos="fade-down" className="text-center mb-5">
            <h2 className="offer-heading responsive-heading division-header">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ items */}
          <div className="container px-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item mb-3 ${openQuestion === index ? "active" : ""}`}
                onClick={() => toggleQuestion(index)}
                style={{
                  cursor: "pointer",
                  borderRadius: "15px",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}

              >
                {/* Question */}
                <div className="faq-question py-3 px-4 d-flex align-items-start fs-5 fw-normal" data-aos="fade-up">
                  <span className="faq-number me-2">{index + 1}.</span>
                  <span>{faq.question}</span>
                </div>

                {/* Answer */}
                <div
                  className={`faq-answer fw-normal ${openQuestion === index ? "show" : "collapse"}`}
                  style={{
                    backgroundColor: openQuestion === index ? "#D9D9D9" : "transparent",
                    padding: openQuestion === index ? "12px 20px 16px" : "0 20px",
                    fontSize: "15px",
                    transition: "all 0.3s ease",
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="faq-cta text-center mt-5" data-aos="fade-up" data-aos-delay={faqs.length * 100}>
            <Link
              to="/contact"
              className="btn fw-semibold text-white text-nowrap"
              style={{
                backgroundColor: "#B88338",
                fontSize: "clamp(0.8rem, 2.5vw, 25px)",
                padding: "10px 30px",
                borderRadius: "30px",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Got a Query? Let’s Talk
            </Link>
          </div>
        </div>






      </div>
      <Footer />
    </div>
  );
}

export default AppDevelopment;
