import React from "react";
import "../styles/hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-video-container">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          src="/hix-hero-section.mp4"
        />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-line">ELEVATE YOUR</span>
          <span className="hero-title-line">BEAUTY ROUTINE</span>
        </h1>
        <p className="hero-subtitle">
          Discover the perfect blend of luxury and performance
        </p>
        <button className="hero-button">Explore Collection</button>
      </div>
    </section>
  );
};

export default HeroSection;
