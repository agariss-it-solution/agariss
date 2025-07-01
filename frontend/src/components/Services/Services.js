
//service
import React, { useState } from "react";
import { FiAlertCircle } from "react-icons/fi"
import "./Services.css"
import webpic from "./pages/Images/Frame 117.png"
import apppic from "./pages/Images/Frame 117 (1).png"
import uiuxpic from "./pages/Images/55b656fa0dd851f3ceb71324865cbcd519015d96.jpg";
import softwarepic from "./pages/Images/Frame 117 (2).png";
import digitalpic from "./pages/Images/Frame 117 (3).png";
import ecomerspic from "./pages/Images/Frame 117 (4).png"
import desktoppic from "./pages/Images/Frame 117 (5).png"
import Footer from "../Footer/footer"

import { Link } from "react-router-dom";
import yourImage from "../Images/Frame 114 (11).png"
import logo from "../Images/Remove_background_project-removebg-preview 1.png";


function Services() {


  const services = [
    {
      label: "Web Development",
      description:
        "Where ideas meet code and design dances with performance — we build web experiences that speak for you",
      image: webpic, // Replace with real image URL or import
      link: "/web-development",
    },
    {
      label: "App Development  ",
      description:
        "From your pocket to the world — powerful apps crafted to connect, engage, and evolve.",
      image: apppic, // Replace with real image URL or import
      link: "/app-development",
    },
    {
      label: " UI/UX Design  ",
      description:
        "Designs that don't just look good, but feel right — where every pixel tells your story.",
      image: uiuxpic, // Replace with real image URL or import
      link: "/ui-ux-design",
    },
    {
      label: "Software Development",
      description:
        "“Custom-crafted software that works the way you think — smart, seamless, and scalable",
      image: softwarepic, // Replace with real image URL or import
      link: "/software-development",
    },
    {
      label: "Digital Marketing",
      description:
        "Not just visibility — we build digital presence that turns attention into loyalty.",
      image: digitalpic, // Replace with real image URL or import
      link: "/digital-marketing",
    },
    {
      label: "E- Commerce Development ",
      description:
        "Emails that always arrive on time — secure, swift, and built for scale.”",
      image: ecomerspic, // Replace with real image URL or import
      link: "/ecommerce-development",
    },
    {
      label: "Desktop App Development ",
      description:
        "Power-packed desktop solutions designed to keep your business grounded and growing.",
      image: desktoppic, // Replace with real image URL or import
      link: "/desktop-apps"
    },
  ]
  return (


    <div className=""> {/* Added text-center here */}
      <div className="container bg-color py-lg-5 text-start "> {/* Added text-center here */}
        <header className="my-4 ps--g5= py-lg-3 text-start">
          <button className="srvices-button  fw-medium fw-small " >Services</button>

          {/* <img src={yourImage} alt="Services" className="me-2 " /> */}
          <h2 className="font-size-heading  responsive-title">
            <span className="highlight-yellow  ">
              End-to-End
            </span>{' '}
            IT Solutions for<br></br>
            Modern Businesses
          </h2>

          <p className="portfolio-subheading fw-normal fs-5 fs-lg-1 font-size-subheading  mb-4">
            We bring the expertise you need, whether you’re launching a new platform,
            enhancing legacy systems, or optimizing performance. Our team is equipped
            to guide you through every technical milestone.
          </p>
        </header>

        <div className="">
          <div className="row d-flex g-lg-5 justify-content-center align-items-stretch">
            {services.map((service, index) => (
              <div className="col-md-6 mb-4 h-100" key={index}>
                <div
                  className="card h-100 d-flex flex-column shadow-sm border-0"
                  style={{
                    maxWidth: "530px",
                    background: "#FFFAFA",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                    e.currentTarget.classList.add("shadow-lg");
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.classList.remove("shadow-lg");
                  }}
                >
                  {/* Top Image */}
                  <div className="position-relative" style={{ maxHeight: "200px", overflow: "hidden" }}>
                    <img
                      src={service.image}
                      alt={service.label}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="row align-items-center border-dark border-2 flex-grow-1 m-0">
                    <div className="col-6 py-lg-5 py-3 px-2">
                      <h5 className="mb-0 text-center fw-normal fs-6 fs-lg-5">
                        {service.label}
                      </h5>
                    </div>
                    <div className="col-6 py-lg-5 py-3 px-2 border-start border-dark border-2">
                      <p className="mb-0 text-start small">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Button */}
                  <div className="border-top border-dark border-2 p-3 mt-auto">
                    <Link
                      to={service.link}
                      className="btn know-more-btn text-decoration-none text-dark d-flex align-items-center gap-1"
                      onClick={(e) => e.stopPropagation()} // prevent card click effect
                    >
                      Know More
                      <span className="fs-5">
                        <FiAlertCircle />
                      </span>
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>


          <div className="container py-5 process-section">
            <h2 className="text-center fw-medium mb-5 fs-lg-2  fs-5">
              Our Process – Strategically Planned, Seamlessly Delivered
            </h2>

            <div className="row g-4">
              {[
                {
                  step: "01",
                  title: "Discovery & Consultation",
                  desc: "We listen closely to understand your goals, challenges, and vision.",
                },
                {
                  step: "02",
                  title: "Research & Planning",
                  desc: "We dive into your industry to craft a strategy aligned with your needs.",
                },
                {
                  step: "03",
                  title: "Proposal & Quotation",
                  desc: "A transparent, customized plan tailored to your project's scope and budget.",
                },
                {
                  step: "04",
                  title: "Design & Development",
                  desc: "We begin building intuitive designs and robust functionality with your feedback.",
                },
                {
                  step: "05",
                  title: "Testing & Refinement",
                  desc: "Every detail is tested, optimized, and polished for a flawless user experience.",
                },
                {
                  step: "06",
                  title: "Launch & Support",
                  desc: "Your solution goes live — backed by ongoing support and future-ready upgrades.",
                },
              ].map((item, i) => (
                <div className="col-12 col-md-6 col-lg-4" key={i}>
                  <div className="text-start px-3">
                    <h5 className="fw-semibold mb-2 fs-6 fs-lg-1 ">
                      <span className=" me-2">{item.step}</span>
                      {item.title}
                    </h5>
                    <p className="fs-6 fs-lg-1  color-name mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center mt-5  fw-medium fs-5 fs-lg-2 closing-line">
              From start to finish, we ensure a stress-free, flawlessly executed event that exceeds your expectations.
            </p>
          </div>



        </div>
      </div>

      <Footer />
    </div>

  );
}

export default Services;