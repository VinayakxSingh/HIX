import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import "../styles/navbar.css";
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="nav-container">
      <div className="logo">
        <Link to="/">
          <GoHome size={30} color={"#000"} />
        </Link>
      </div>

      <div>
        <Link to="/about">
          <img src="/images/Logo.png" alt="Logo" id="navbar-middle" />
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <br />
        <Link to="/events">Events</Link>
        <br />

        {/* Dropdown for Product Ranges */}
        <div
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link to="/product-ranges" className="dropdown-button">
            Product Ranges▼
          </Link>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/product-ranges">Lip-Gloss</Link>

              <br />
              <Link to="/product-ranges/concealers">Concealers</Link>
              <br />
              <Link to="/product-ranges">Hair Serums</Link>
            </div>
          )}
        </div>
        <br />
        <Link to="/about">About Us</Link>
        <br />
        <Link to="/contact">Contact Us</Link>
        <br />
        <Link to="login/signup">
          <FaRegUser />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
