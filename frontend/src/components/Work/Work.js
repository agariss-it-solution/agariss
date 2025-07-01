
import React, { useState } from 'react';
import './Work.css';
import workIcon from './Images/Frame 114 (8).png';
import workImg from './Images/5244090 1.png';
import logo from '../Images/Remove_background_project-removebg-preview 1.png';
import imglogo1 from './Images/Frame 1116607747 (1).png'
import imglogo2 from './Images/Frame 1116607861.png'
import Footer from "../Footer/footer"

function Work() {

  return (
    <div>
      {/* Work Section */}
      <div className="bg-color py-5 container-lg">
        {/* First Section - side by side */}
        <div className="row align-items-start mb-5">
          <div className="col-md-6 d-lg-flex flex-column ps-4  align-items-start  mb-4 mb-md-0">
            <button className="srvices-button   fw-medium" >Work</button>
            <p className="  fw-medium responsive-title py-2 fs-lg-2 work-heading mb-4 ">
              Empowering businesses to grow digitally through innovative IT solutions and proven expertise.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src={workImg} alt="Work illustration" className="img-fluid" />
          </div>
        </div>



        {/* Second Section */}
        <div className="text-center mb-5">
          <h2 className=" fw-medium  responsive-heading work-title">Our Projects</h2>
          <p className="portfolio-subheading fs-6 fs-lg-3 text-center fw-medium work-subtitle mb-4">
            A glimpse into the solutions we've crafted with passion, precision, and purpose.
          </p>
         <div className="row gap-5 justify-content-center mt-4">
  <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
    <div className="hover text-center">
      <img
        src={imglogo1}
        alt="App Development 1"
        className="img-fluid bg-white rounded mb-3"
      />
    </div>
    <h2 className="fs-5 fs-md-4 fs-lg-3 text-center mt-2">Green Walk</h2>
  </div>

  <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
    <div className="hover text-center">
      <img
        src={imglogo2}
        alt="App Development 2"
        className="img-fluid bg-white rounded mb-3"
      />
    </div>
    <h2 className="fs-5 fs-md-4 fs-lg-3 text-center mt-2">
      Event Management System
    </h2>
  </div>
</div>

        </div>
      </div>
      <Footer />

    </div>
  );
}

export default Work;