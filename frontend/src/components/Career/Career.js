import React, { useEffect, useState, useRef } from "react";
import journeyImg from "./Images/cherrydeck-UpsEF48wAgk-unsplash 1 (1).png"
import nextStepImg from "./Images/3704229 1.png";
import careerImg from "./Images/why join us 1.png";
import futureImg from "./Images/2177389 1.png";
import yourBtnImage from "./Images/Frame 1116607747.png";
import logo from "../Images/Remove_background_project-removebg-preview 1.png";
import { fetchJobs, submitApplication } from "../Api/careerApi";

import workingImg from "./Images/10314649 1 (1).png"
import { useNavigate, Link } from 'react-router-dom';
import Footer from "../Footer/footer"
import AOS from "aos";
import "aos/dist/aos.css";

import "./Career.css"

function Career() {
  const formRef = useRef(null);
  const openingsRef = useRef(null);


  const navigate = useNavigate();

  const handleViewRoles = (title) => {
    setSelectedJobTitle(title);
    setFormData((prev) => ({ ...prev, position: title }));
    openingsRef.current?.scrollIntoView({ behavior: "smooth" }); // 👈 SCROLL TO OPENINGS
  };
  const handleApplyClick = (title) => {
    setSelectedJobTitle(title);
    setFormData((prev) => ({ ...prev, position: title }));
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [jobs, setJobs] = useState([]);
  const [selectedJobTitle, setSelectedJobTitle] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact_number: "",
    resume: null,
    position: "",
    experience: "",
  });

  useEffect(() => {
      AOS.init({ duration: 3000, once: true });
    const loadJobs = async () => {
      const jobData = await fetchJobs();
      setJobs(jobData);
    };
    loadJobs();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    const result = await submitApplication(payload);
    if (result.success) {
      alert("Application submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        contact_number: "",
        resume: null,
        position: "",
        experience: "",
      });
      setSelectedJobTitle("");
    } else {
      alert("Failed to submit application.");
    }
  };

  return (
    <div className="">
      <div className="bg-color py-5  container">
        <div className="row  d-flex align-items-center text-center">
          {/* Text Column */}
          <div className="text-start px-3">
            <h2 className="fw-medium carrier-title  responsive-heading">Shape Your Future With Us</h2>
            <p className="fw-normal carrier-subtitle fs-6 fs-lg-1 mb-4">
              Join a team that transforms challenges into opportunities and ideas
              into innovations — and grow personally and professionally every step
              of the way.
            </p>
          </div>

          {/* Image Column */}
          <div className="col-12 d-flex justify-content-center">
            <img src={futureImg} alt="Shape Your Future" className=" img-fluid" />
          </div>
        </div>


        {/* Journey Section */}
        <div className="row gap-4 gap-lg-0 gap-md-0 pt-lg-4 mt-4 mt-lg-5 text-center">
          {/* Text and Button Column */}
          <div className="col-12 col-md-6 col-lg-6 d-flex flex-column align-items-start">
            <div className="text-start">
              <div className="">
                <h2 className=" fw-medium responsive-title carrier-heading" data-aos="fade-right">
                  Embark on a Journey of Growth with Agariss IT
                </h2>
                <p className=" fw-normal fs-6 fs-lg-3 mb-4 carrier-subheading" data-aos="fade-right">
                  At <span className="highlight ">Agariss</span> IT, we believe innovation happens when passionate minds come together. Our journey has been shaped by talented individuals who bring fresh ideas, dedication, and creativity to every project — helping us deliver cutting-edge solutions across web and mobile app development, e-commerce, digital marketing, enterprise software, desktop apps, and SMTP services.
                  We’re growing fast and are on the lookout for curious, driven individuals ready to solve real challenges and shape the future. At Agariss, you’ll be part of a collaborative and forward-thinking team that values growth, creativity, and ownership. If you're ready to build something meaningful and thrive in a place that feels like home — your journey starts here.
                </p>
                <div className="d-flex justify-content-start fw-medium mt-3 view-roles-img" data-aos="fade-right">
                  <div
                    className="fw-semibold text-white text-nowrap text-center"
                    style={{
                      backgroundColor: "#B88338",
                      fontSize: "clamp(0.8rem, 2.5vw, 20px)",
                      padding: "10px 20px",
                      borderRadius: "30px",
                      cursor: "pointer",
                      transition: "all 0.3s ease-in-out",
                    }}
                    onClick={() => handleViewRoles('Software Engineer')}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    View Roles
                  </div>
                </div>


              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center" data-aos="fade-left">
            <img src={journeyImg} alt="Team working together" className="img-fluid" />
          </div>
        </div>


        {/* Next Step Section */}
        {/* Next Step Section */}
        <div className="row align-items-center my-5 ">
          <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0" >
            <img src={nextStepImg} alt="Next Step with Agariss IT" className="img-fluid" data-aos="fade-right" />
          </div>
          <div className="col-12 col-md-6 text-start fw-medium   carrier-heading">
            <h2 className="responsive-heading " data-aos="fade-down">Ready to Take the Next Step?</h2>
            <p className="fw-normal fs-6 fs-lg-1 carrier-subheading mb-4" data-aos="fade-left">
              If you're passionate about tech and ready to make an impact, Agariss IT is the place to start. We offer a space that values creativity, encourages growth, and lets you work on real, meaningful projects. This isn’t just a job — it’s your next big step.
            </p>
          </div>
        </div>


        {/* Why Us Section */}
        <div className="row g-lg-5 g-3">
          {/* Image Column */}
          <div className="col-12  col-md-6" data-aos="flip-left">
            <img src={careerImg} alt="Career at Agariss IT" className="img-fluid rotate-in" />
          </div>

          {/* Text Column */}
          <div className="col-12 col-md-6 text-start fw-medium responsive-heading  carrier-heading " data-aos="fade-up">
            <h2>Why Start Your Career with Us?</h2>
            <div className="fs-4 ">
              <ul className="list-unstyled fs-6 fs-lg-1 fw-normal carrier-subheading ">
                <li>💼 Work on diverse projects across industries</li>
                <li>🚀 Join a growing team that values skill and initiative</li>
                <li>🎯 Learn fast, grow faster with constant innovation</li>
                <li>🧠 Be part of meaningful solutions that power real businesses</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-lg-5">
          <h2 className="text-center responsive-heading  fw-medium  carrier-heading pb-lg-4" data-aos="fade-right" ref={openingsRef}>Our Openings</h2>
          <div className="row gap-3" >
            {jobs.length === 0 ? (
              <p className="text-center fs-5 fw-normal carrier-subheading">No openings available right now.</p>
            ) : (
              jobs.map((job, index) => (
                <div className="col-12" key={index}>
                  <div className="card fs-6" style={{ background: "#B9B7B5" }}>
                    <div className="card-body" data-aos="fade-up">
                      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3" >

                        {/* Left Side: Job Details */}
                        <div className="text-start">
                          <h5 className="card-title fs-lg-1 fw-bold mb-2">{job.title}</h5>
                          <p className="mb-1">
                            <strong>Job Type:</strong> {job.jobtype}
                          </p>
                          <p className="mb-0">
                            <strong>Requirements:</strong> {job.requirement}
                          </p>
                        </div>

                        {/* Right Side: Apply Button */}
                        <div className="text-md-end text-start">
                          <button
                            className="btn btn-outline-primary fs-6 px-4"
                            onClick={() => handleApplyClick(job.title)}
                          >
                            Apply
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              ))
            )}
          </div>
        </div>




        {/* Culture Section */}
        <div className="py-5 px-md-5" >
          <div className="container-fluid">
            <div className="row align-items-start justify-content-start">

              {/* Left Column: Heading */}
              <div className="col-12 col-md-2 mb-3 mb-md-0" data-aos="fade-right">
                <h3 className="fw-semibold fs-2" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#333" }}>
                  Our Culture
                </h3>
              </div>

              {/* Right Column: Paragraphs */}
              <div className="col-12 col-md-10" data-aos="fade-left">
                <p
                  className="mb-3 py-lg-3 fs-6 fs-lg-1"
                  style={{ fontSize: "clamp(1rem, 2.5vw, 1.1rem)", color: "#555", lineHeight: "1.7" }}
                >
                  At  <span className="highlight ">Agariss</span> IT, culture isn’t just a buzzword — it’s our foundation. We foster an open,
                  collaborative environment where every idea is valued and every voice matters. From daily
                  brainstorming sessions to shared successes, we believe in growing together as a team. Our
                  work culture thrives on transparency, ownership, and constant learning, encouraging
                  everyone to push boundaries and innovate boldly. <br />
                  Whether you’re remote or in-office, you’ll feel connected, supported, and inspired to
                  bring your best every day. We don’t just build software — we build relationships, careers,
                  and a community where creativity and ambition thrive.
                </p>

              </div>

            </div>
          </div>
        </div>





        {/* Perks Section */}
        <div className="">
          <h2 className="text-start  fw-medium text-center responsive-heading  carrier-heading ">Perks</h2>
          <div className="row justify-content-center">
            {[
              "Challenging Projects",
              "Flexible Timing",
              "Work-Life Balance",
              "Creative Freedom",
              "Skill Development",
              "Team Celebrations",
            ].map((perk, i) => (
              <div className="col-12 col-sm-6  col-lg-4 my-2" key={i}>
                <div className="p-3 fs-6 fs-lg-1 border rounded text-center card-bg-color fw-medium perk-text"  data-aos="flip-left"style={{ background: "#B9B7B5" }}>{perk}</div>
              </div>
            ))}
          </div>
        </div>


        {/* Application Form */}
        <div className="row align-items-start my-5 d-flex justify-content-center form-section" ref={formRef}>
          <div className="col-12  col-md-6 text-center">
            <img src={workingImg} alt="Career Journey" className="my-workImg img-fluid"  data-aos="fade-right"/>
          </div>
          <div className="col-12 col-md-6 text-start fs-6 fs-lg-1 portfolio-subheading fw-normal carrier-form " data-aos="fade-left">
            <h2 className="text-start fw-medium  carrier-heading responsive-heading ">Ready to Start Your Journey?</h2>
            <p className="text-start fw-light carrier-subtitle fs-6 fs-lg-1">Fill out the form — we’ll reach out if it’s a good fit!</p>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3 ">
                <div className="col-12 col-md-6 ">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-12 col-md-6 ">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="mb-3 fs-6 fs-lg-1">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="contact_number"
                  value={formData.contact_number}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Submit your resume *</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  className="form-control choise-file"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Which position are you interested in? *</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Your Work Experience *</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              {/* New Row for CAPTCHA and Send Message Button */}
              <div className="row">
                <div className="col-12 col-md-6 d-flex justify-content-start">
                  <button className="sendbtn">Send Message</button >
                </div>

              </div>
            </form>
          </div>

        </div>






      </div>
      <Footer />
    </div>

  );
}

export default Career;
