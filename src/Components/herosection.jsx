import React from "react";
import "../styles/hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero-container">
      <div id="summersale">
        <h1>Our Summer Sale is Live </h1>
        <Link to="/product-ranges">
          <button className="hero-button">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
