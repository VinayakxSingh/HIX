import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import "../styles/navbar.css";
import { FaRegUser } from "react-icons/fa6";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="left-section">
          <button className="menu-button" onClick={toggleMenu}>
            <span className="menu-icon">☰</span>
          </button>
          <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <Link to="/products" className="nav-link">
              Products
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>

        <div className="center-logo">
          <Link to="/" className="logo-text">
            <span className="logo-first">HIX</span>
            <span className="logo-second">COSMETICS</span>
          </Link>
        </div>

        <div className="right-section">
          <Link to="/cart" className="nav-icon">
            <HiOutlineShoppingCart />
          </Link>
          <Link to="login/signup" className="nav-icon">
            <FaRegUser />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
