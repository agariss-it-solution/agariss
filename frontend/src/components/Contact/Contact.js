import { useState ,useEffect} from "react";
import contecImage from "./Images/front-view-woman-with-copy-space.png";

import "./Contact.css"

import { submitContactForm } from "../Api/contactApi";
import Footer from "../Footer/footer"
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Image,
} from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";



const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    moblie: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      await submitContactForm(formData);
      setSuccess("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        moblie: "",
        description: "",
      });
    } catch {
      setError("Submission failed. Please try again.");
    }

    setIsSubmitting(false);
  };


  useEffect(() => {
  AOS.init({ duration: 2000, once: true });
}, []);
  return (
    <div className="">

      <div className="position-relative w-100">
        <img
          src={contecImage}
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
        <h2 className="hero-title">LET’S TALK<br />
          Your vision, our expertise.</h2>

        {/* Breadcrumb */}
        <div className="hero-btn  p-2">Contact Us</div>
      </div>

      <div className="contact-wrapper px-2 pb-4 mb-4">
        <div className="contact-header text-center w-lg-50 mx-auto pb-5  ">
          <h2 className="fw-normal fs-6 fs-lg-1 text-start px-3 text-lg-center py-lg-4 py-2 contec-heading" data-aos="fade-down">
            Have an idea? We’re ready to bring it to life. Fill out the form and
            let’s create something exceptional together.
          </h2>
        </div>

        <div>
          <Row className="justify-content-center" >
            <Col xs={12} md={11} lg={10} xl={9} data-aos="fade-right">
              <Card
                className="p-lg-4  border-0 shadow rounded-4"
                style={{ backgroundColor: "#ABABAB" }}
               
              >
                <Row>
                  {/* Left: Form */}
                  <Col lg={7} sm={12} className="mb-4 mb-lg-0 p-lg-4">
                    <h5 className="fw-semibold fs-5 text-start p-3 contec-size  text-lg-center mb-4">
                      Got a question or idea?
                      <br />
                      Just fill out the form below
                    </h5>
                    <Form className="contact-form p-4" onSubmit={handleSubmit}>

                      {/* First and Last Name */}
                      <Row className="mb-3">
                        <Col md={6} className="mb-3 mb-md-0">
                          <Form.Control
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                        </Col>
                        <Col md={6}>
                          <Form.Control
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                        </Col>
                      </Row>

                      {/* Email */}
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="E-mail"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      {/* Mobile */}
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          name="moblie"
                          placeholder="Mobile"
                          value={formData.moblie}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      {/* Description */}
                      <Form.Group className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="description"
                          placeholder="Description"
                          value={formData.description}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      {/* CAPTCHA & Submit Button */}
                      <div className="d-flex align-items-center gap-3 mb-3">

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-4"
                        >
                          {isSubmitting ? "Submitted" : "Submit"}
                        </Button>
                      </div>

                      {/* Error & Success Messages */}
                      {error && <p className="text-danger">{error}</p>}
                      {success && <p className="text-success">{success}</p>}
                    </Form>
                  </Col>

                  {/* Right: Contact Info */}
                  <Col lg={5} sm={12 }  data-aos="fade-left">
                    <Card
                      className="h-100 border-0 text-white rounded-4 p-4 info-subtext"
                      style={{ backgroundColor: "#3188f7" }}
                      
                    >
                      <h5 className="fw-medium fs-5 fs-lg-1 contec-info mb-4">Contact Info</h5>

                      {/* Location */}
                      <div className="d-flex align-items-start gap-3 mb-4 flex-column flex-sm-row">
                        <FaMapMarkerAlt className="text-white social-icon-hover fs-1 " style={{ fontSize: "32px" }} />
                        <div className="text-start">
                          <strong className="fw-semibold fs-5 fs-md-4 fs-lg-3 info">Address</strong>
                          <p className="mb-0 text-white fs-6 fs-md-5 fs-lg-5">
                            313, Royal Trade Centre, Hazira - Adajan Rd, nr. Pandit Deendayal Upadhyay Cable Stayed Bridge,
                            Jalaram Society, Adajan, Surat, Gujarat 395009
                          </p>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="d-flex align-items-start gap-3 mb-4 flex-column flex-sm-row">
                        <FaEnvelope className="text-white social-icon-hover mt-1" style={{ fontSize: "32px" }} />
                        <div className="text-start">
                          <strong className="fw-semibold fs-5 fs-md-4 fs-lg-3 info">Email Us</strong>
                          <p className="mb-0 fs-6 fs-md-5 fs-lg-5">
                            <a href="mailto:agarissitsolution@gmail.com" className="text-white text-decoration-none">
                              agarissitsolution@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="d-flex align-items-start gap-3 flex-column flex-sm-row">
                        <FaPhone className="text-white social-icon-hover mt-1" style={{ fontSize: "32px" }} />
                        <div className="text-start">
                          <strong className="fw-semibold fs-5 fs-md-4 fs-lg-3 info">Contact Us</strong>
                          <p className="mb-0 fs-6 fs-md-5 fs-lg-5">
                            <a href="tel:+919925925113" className="text-white text-decoration-none">
                              +91 9925925113
                            </a>
                          </p>
                        </div>
                      </div>

                      {/* Social Icons */}
                      <div className="mt-4">
                        <strong className="fw-semibold fs-5 fs-md-4 fs-lg-3 info">Follow us on</strong>
                        <div className="d-flex gap-3 mt-2">
                             <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=agarissitsolution@gmail.com&su=Hello%20from%20website&body=I%20want%20to%20connect%20with%20you."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                           
                              <FaInstagram  className="text-white social-icon-hover" style={{ fontSize: "40px" }}
                            
                               />
                               </a>
                                 <a
                            href="https://www.facebook.com/profile.php?id=61577234442740"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                           
                              <FaFacebook  className="text-white social-icon-hover" style={{ fontSize: "40px" }}
                            
                               />
                               </a>
                                 <a
                            href="https://api.whatsapp.com/send?phone=9925925113"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                           
                              <FaWhatsapp  className="text-white social-icon-hover" style={{ fontSize: "40px" }}
                            
                               />
                               </a>
                        
                         
                        </div>
                      </div>
                    </Card>

                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

