const Footer = () => {
  const [submitted, setsubmitted] = useState(false);
  const [email, setemail] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    setsubmitted(true);
    try {
      let post = await axios.post(
        "https://hixcosmetics-default-rtdb.firebaseio.com/Emails.json",
        { email }
      );
      console.log(email, "has been posted to db", post);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="footer-container">
      <div>
        <img src="/images/justHIX.png" alt="HIX" />
      </div>
      <div>
        <h3>
          Be the first to know about new launches, exclusive vouchers, and more!
        </h3>
        <h3>Subscribe to our newsletter for updates straight to your inbox!</h3>
        <form className="footer-input-group" onSubmit={handlesubmit}>
          {submitted ? (
            <h3>
              a confirmation email has been sent out to{" "}
              <span
                style={{
                  color: "#8b5e83",
                  textDecoration: "underline",
                  fontWeight: "bold",
                  fontFamily: "Bebas Neue, sans-serif",
                }}
              >
                {email}
              </span>
            </h3>
          ) : (
            <div>
              <input
                type="email"
                placeholder="E-mail address"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <button type="submit" id="footer-submit-button">
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
      <div className="footer-social-icons">
        <BiLogoInstagram />
        <FaFacebookF />
        <FaXTwitter />
        <SiPinterest />
        <FaLinkedinIn />
      </div>
      <div className="footer-links">
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/termsandconditions">Terms & Conditions</Link>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import "../styles/footer.css";
import { Await, Link } from "react-router-dom";
import { BiLogoInstagram } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SiPinterest } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import axios from "axios";
