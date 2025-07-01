import { useState } from "react";
import "./footer.css"



import logo from "../Images/logo.png";

import {
    FaEnvelope,
    FaPhone,
  FaMapMarkerAlt,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaFacebook,
    FaWhatsapp,
} from "react-icons/fa";

function Footer() {
    const [hovered, setHovered] = useState(false);
    return (
        <div className="footer text-dark pt-5 pb-3">
            <div className="container">
                {/* Top Section */}
                <div className="row g-4">
                    {/* Company Info */}
                    <div className="col-lg-3 col-md-6 col-12 footer-color text-md-start">
                        <img src={logo} alt="Company Logo" className="company-logo  text-start mb-3 " style={{height:"120px", width:"250px"}}/>
                        <p className="lh-lg fs-6 footer-color">
                            Agariss IT solutions designed to elevate your business and drive exponential growth.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="col-lg-3 col-md-6 col-12">
                        <h5>Services</h5>
                        <ul className="list-unstyled lh-lg fs-6 text-start footer-color">
                            <li><a href="/web-development" className="service-link ">Web Development</a></li>
                            <li><a href="/app-development" className="service-link">App Development</a></li>
                            <li><a href="/ui-ux-design" className="service-link">UI/UX Design</a></li>
                            <li><a href="/digital-marketing" className="service-link">Digital Marketing</a></li>
                            <li><a href="/software-development" className="service-link">Software Development</a></li>
                            <li><a href="/ecommerce-development" className="service-link">E-commerce Development</a></li>
                            <li><a href="/desktop-app" className="service-link">Desktop App Development</a></li>
                            <li><a href="/smtp-services" className="service-link">SMTP Services</a></li>
                            <li><a href="/enterprise-solutions" className="service-link">Enterprise Solutions</a></li>
                        </ul>
                    </div>


                    {/* Resources */}
                    <div className="col-lg-3 col-md-6 col-12">
                        <h5>Resources</h5>
                        <ul className="list-unstyled lh-lg fs-6 ">
                           <li><a href="/blogs" className="service-link ">Blog</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="col-lg-3 col-md-6 col-12">
                        <h5>Company</h5>
                        <ul className="list-unstyled lh-lg fs-6 footer-color">
                             <li><a href="/about" className="service-link ">About</a></li>
                           
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="row g-4 mt-4">

                    {/* Address */}
                    <div className="col-lg-4 col-md-6 col-12 d-flex align-items-start gap-3">
                      <a
                           href="https://maps.app.goo.gl/PaGb6AAAjStPPpuaA"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaMapMarkerAlt className=" fw-semibold icon-info  social-icon-hover"
                          style={{ width: "24px", height: "24px", marginTop: "4px" }}
                           />
                        </a>
                          {/* <FaMapMarkerAlt className=" fw-semibold icon-info  social-icon-hover"
                          style={{ width: "24px", height: "24px", marginTop: "4px" }}
                           /> */}
                        <div>
                            <h5 className="mb-1">Address</h5>
                            <address className="lh-lg fs-6 footer-color mb-0">
                                313, Royal Trade Centre, Hazira - Adajan Rd,<br />
                                nr. Pandit Deendayal Upadhyay Cable Stayed Bridge,<br />
                                Jalaram Society, Adajan, Surat, Gujarat 395009
                            </address>
                        </div>
                    </div>

                    {/* Connect With Us */}
                    <div className="col-lg-2 col-md-6 col-12">
                        <a
                            href="tel:+919925925113"
                            style={{ textDecoration: "none", color: "inherit" }}
                            className="d-flex align-items-start gap-3"
                        >
                           
                            <FaPhone className=" fw-semibold  icon-info social-icon-hover"
                            style={{ width: "24px", height: "24px", marginTop: "4px" }}
                             />
                            <div>
                                <h5 className="mb-1">Contact Us</h5>
                                <p className="lh-lg fs-6 footer-color mb-0">+91 9925925113</p>
                            </div>
                        </a>
                    </div>
                    {/* Email */}
                    <div className="col-lg-3 col-md-6 col-12 d-flex align-items-start gap-3">
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=agarissitsolution@gmail.com&su=Hello%20from%20website&body=I%20want%20to%20connect%20with%20you."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                           
                              <FaEnvelope className=" fw-semibold icon-info social-icon-hover"
                              style={{ width: "24px", height: "24px", marginTop: "4px" }}
                               />
                        </a>
                        <div>
                            <h5 className="mb-1">Email Us</h5>
                            <p className="lh-lg fs-6 footer-color mb-0">agarissitsolution@gmail.com</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="col-lg-3 col-md-6 col-12 text-center text-md-start">
                        <h5>Connect with us</h5>
                        <ul className="list-inline mt-2">
                            {[
                                { icon: <FaInstagram    style={{ width: "40px", height: "40px", marginTop: "4px" }}  />, link: "https://www.instagram.com/agariss_it001?igsh=MWYwcno4OWgwZmlubA=="  },
                                // { icon: <FaLinkedin   style={{ width: "24px", height: "24px", marginTop: "4px" }}/>, link: "https://www.linkedin.com" },
                                { icon: <FaFacebook   style={{ width: "40px", height: "40px", marginTop: "4px" }} />, link: "https://www.facebook.com/profile.php?id=61577234442740" },
                                { icon: <FaWhatsapp    style={{ width: "40px", height: "40px", marginTop: "4px" }} />, link: "https://api.whatsapp.com/send?phone=9925925113" },
                               
                            ].map((item, i) => (
                                <li className="list-inline-item me-2" key={i}>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white fs-5"
                                        onMouseEnter={() => setHovered?.(i)} // Optional hover handling
                                        onMouseLeave={() => setHovered?.(null)}
                                        style={{ transition: "color 0.3s" }}
                                    >
                                        {item.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <p className="text-center mt-4 fs-6 footer-color mb-0">
                    &copy; 2025 AgarissIT. All rights reserved.
                </p>
            </div>
        </div>

    );
}
export default Footer;
