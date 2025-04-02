import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import { BiLogoInstagram } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SiPinterest } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
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
        <input type="email" placeholder="E-mail address" />
      </div>
      <div className="footer-social-icons">
        <BiLogoInstagram />
        <FaFacebookF />
        <FaXTwitter />
        <SiPinterest />
        <FaLinkedinIn />
      </div>
      <div className="footer-links">
        <Link>About us</Link>
        <Link>Contact us</Link>
        <Link>Privacy Policy</Link>
        <Link>Terms & Conditions</Link>
        <Link>FAQs</Link>
      </div>
    </div>
  );
};
export default Footer;
