
// import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "./about.css";
import aboutImg from "./Images/abstract-networking-concept-still-life-arrangement 2.png";
import swapImg1 from "./Images/modern-technologies-makes-life-simpler-young-people-working-call-center-new-deals-is-coming.jpg"
import swapImg2 from "./Images/people-working-with-documents-top-view.jpg"
import ss from "./Images/Screenshot 2025-07-01 140542.png"
import goalImg from "./Images/20943657 1.png"
import Footer from "../Footer/footer"
import { IoSearch, IoPeople } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { SiTestcafe } from "react-icons/si";
import { ImBullhorn } from "react-icons/im";
import { IoIosRocket } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import AOS from "aos";
import "aos/dist/aos.css";




import startImg from "./Images/Frame 1116607782.png";
import { useState } from "react";

const iconList = [
  IoPeople,
  IoSearch,
  MdEdit,
  FaCode,
  SiTestcafe,
  ImBullhorn,
  IoIosRocket,
  TfiHeadphoneAlt,
];
function About() {
  const steps = [
    {
      title: "Step 1: Discovery & Consultation",
      description: "Understanding your goals and gathering key requirements.",
      side: "right",
    },
    {
      title: "Step 2: Research & Planning",
      description: "Analyzing your market and creating a strategic roadmap.",
      side: "left",
    },
    {
      title: "Step 3: Design & Wireframing",
      description: "Crafting user-focused, intuitive design mockups.",
      side: "right",
    },
    {
      title: "Step 4: Development",
      description: "Building secure, scalable, and functional software.",
      side: "left",
    },
    {
      title: "Step 5:Testing & Quality Assurance",
      description: "Ensuring the product is bug-free and high-performing.",
      side: "right",
    },
    {
      title: "Step 6: Review & Feedback",
      description: "Collecting your input and making final refinements.",
      side: "left",
    },
    {
      title: "Step 7: Launch",
      description: "Deploying the solution live with confidence.",
      side: "right",
    },
    {
      title: "Step 8: Support & Growth",
      description: "Providing updates, support, and scaling solutions.",
      side: "left",
    },
  ]

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });


  }, []);

  return (
    <div >
      <div className="position-relative w-100">
        <img
          src={aboutImg}
          alt="Web Development"
          className="img-fluid w-100"
          style={{ objectFit: "cover", height: "auto", maxHeight: "100vh" }}
        />

        {/* Optional overlay for better contrast */}
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />

        {/* Heading */}
        <h2 className="hero-heading ">About Us </h2>

        {/* Breadcrumb */}
        <div className="hero-breadcrumb p-2 fs-8 fs-lg-3">Services /About us</div>
      </div>

      <div className="pt-lg-5" >
        <div className="container">
          <div className="row ">
            {/* Text Column */}
            <div className="col-md-6  mb-4 pt-3 pt-lg-5 d-flex flex-column align-items-start align-items-md-start text-center text-md-start ">
              <h1 className="portfolio-subheading  text-start fw-light fs-6 fs-lg-2  fs-lg-1  about-heading mb-4">Helping Businesses Grow Digitally</h1>
              <h2 className="about-subtitle fw-semibold text-start  about-title responsive-heading text-start">New IT Solutions<br></br>
                Company</h2>
              <p className="portfolio-subheading fw-normal  text-start mb-4 fs-5 fs-lg-1">Always Keep Your Business Ahead of the Technology Curve</p>

            </div>



            <div className="col-md-6 start-heading  d-flex justify-content-end align-items-start">
              <div className="about-image position-relative">
                {/* Top Image */}
                <img src={swapImg1} alt="Before" className="img-fluid top-img" />

                {/* Bottom Image */}
                <img src={swapImg2} alt="After" className="img-fluid bottom-img" />
              </div>


            </div>
            <p className="portfolio-subheading w-lg-75 pt-4 pt-lg-1 fw-normal about-text text-start  fs-6 fs-lg-1 px-lg-5">
              <span className="highlight-yellow ">Agariss</span> is the New IT Solutions company based in Surat, India. The company is to help
              businesses both national and global with IT solutions and services to meet the evolving
              demands of technology. With comprehensive technology and design solutions, Agariss IT
              Solution specializes in catering to a wide spectrum of clients. With our proactive
              approach, unflinching commitment, extensive experience, and creative mindset, we achieve
              extraordinary results for our clients, add value to their business, and always excel their
              expectations. We are dedicated to building simple, effective, affordable, and manageable
              Applications.
            </p>

          </div>
        </div>






        <div className="row align-items-center container m-auto my-5 ">
          <div className="col-md-6">
            <img src={goalImg} alt="Vision and Values" className="img-fluid img-fluid zoom-hover " />
          </div>
          <div className="col-md-6  ">
            <p className="portfolio-subheading fw-light fs-5 fs-lg-1 mb-4">GOALS</p>
            <h2 className="about-subtitle fw-semibold goal-subheading responsive-heading">Our Visions & Values</h2>
            <p className="portfolio-subheading fw-light goal-subtitle fs-6 fs-lg-1 mb-4">Help Businesses with Smooth Technology Transition</p>

            <p className="portfolio-subheading py-4 fw-normal gol-text fs-6 fs-lg-1 mb-1 mt-4">
              At  <span className="highlight-yellow">Agariss</span>, our primary goal is to promote the company brand as a pioneer and a global IT
              Solutions provider. Our technology-driven approach and customer-focused attitude help us not
              only meet client expectations but often exceed them. Our vision is to develop Netsol as a brand recognized for its innovations and technological
              excellence without compromising our ethics. We believe in stopping at nothing but excellence
              and help our clients with efficient IT solutions and services which allow their businesses to
              grow over the years.
            </p>

          </div>
        </div>
        <div className="">
          <div className="py-lg-5 px-2 px-lg-5 about-service" style={{ backgroundColor: "#555555" }}>
            <div className="my-5 container">
              <div className="row align-items-center gx-0"> {/* gx-0 removes horizontal gutter */}

                {/* Text Section (Left) */}
                <div className="col-12 col-md-6">
                  <p className="portfolio-subheading fw-light goal-heading mb-4">APPROACH</p>
                  <h2 className="about-subtitle fw-semibold responsive-heading  about-name">Our Purpose and Philosophy</h2>
                  <p className="portfolio-subheading fs-6 fs-lg-1 fw-light text-white goal-subtitle mb-4">
                    Build Tech-enabled Systems and Processes
                  </p>
                </div>

                {/* Image Section (Right) */}
                <div className="col-12 col-md-6 text-center">
                  {/* <img src={startImg} alt="Vision and Values" className="img-fluid rocket-color-hover" /> */}

                  <div className="rocket-hover-wrapper">
                    <img
                      src={startImg}
                      alt="Rocket Normal"
                      className="rocket-image base"
                    />
                    <img
                      src={ss}
                      alt="Rocket Hover"
                      className="rocket-image  filtered"
                      style={{ borderRadius:"10%" ,height:"100%"}}
                    />
                  </div>

                </div>


                <p className="portfolio-subheading fs-6 fs-lg-1 py-4 fw-normal text-white gol-text mb-1 mt-4">
                  Client satisfaction is our primary focus and purpose. At Agariss, we believe in serving 100 clients with excellence
                  rather than compromising on our resources and quality of service for 1000 clients for higher profits. We believe that
                  client satisfaction is the ultimate reward which is also our company philosophy. Our objective is to grow as a tech
                  brand which is known for quality-driven excellent IT solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-3">
          {/* ---------- DESKTOP VIEW ---------- */}
          <div style={{ background: "#F1E6D7" }}>
            <div className="d-none d-lg-block fs-3 text-dark fw-bold text-center py-lg-4">Steps of IT development Process</div>

            <div
              className="timeline-container p-5 d-none d-md-block"
              style={{ background: "#F1E6D7" }}
            >

              <div className="timeline-line"></div>
              {steps.map((step, index) => (
                <div
                  className="row position-relative mb-5 align-items-center"
                  key={index}
                >
                  {/* LEFT SIDE */}
                  <div className="col-md-5  text-md-end">
                    {index % 2 !== 0 && (
                      <div className="timeline-content pe-3 timeline-animate-left">
                        <h5 className="fw-bold">{step.title}</h5>
                        <p className="text-muted">{step.description}</p>
                      </div>
                    )}
                  </div>

                  {/* CENTER DOT */}
                  <div className="col-md-2 position-relative d-flex justify-content-center">
                    <div className="timeline-dot"></div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="col-md-5 text-md-start">
                    {index % 2 === 0 && (
                      <div className="timeline-content ps-3 timeline-animate-right">
                        <h5 className="fw-bold">{step.title}</h5>
                        <p className="text-muted">{step.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- MOBILE VIEW ---------- */}
          <div className="d-md-none px-2 my-5 d-flex justify-content-center" data-aos="fade-up">
            <div className="about-single-card p-4 rounded-4 shadow bg-white w-100">
              <h3 className="text-center fw-bold mb-4 about-title fs-4">
                Steps of IT development Process
              </h3>
              <div className="position-relative">
                <div className="about-vertical-line"></div>
                {steps.map((step, index) => {
                  const Icon = iconList[index]; // ✅ your icon from array
                  return (
                    <div
                      className="d-flex mb-4 position-relative timeline-step-item"
                      key={index}
                    >
                      <div className="about-dot flex-shrink-0 me-3 mt-1">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h5 className="fw-medium fs-5 mb-1">{step.title}</h5>
                        <p className="fw-normal deceription-color fs-6 mb-0">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>









      </div>

      <Footer />
    </div>

  );
}

export default About;
