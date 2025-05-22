import React, { useState, useEffect } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 1000 });
    }
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-hero" data-aos="fade-down">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you</p>
      </div>

      <div className="contact-content">
        <div className="contact-info" data-aos="fade-right">
          <div className="info-card">
            <h3>Contact Information</h3>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>123 Beauty Street, New York, NY 10001</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>info@beautybrand.com</p>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form" data-aos="fade-left">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
