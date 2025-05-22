import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero" data-aos="fade-down" data-aos-duration="1000">
        <h1>Our Story</h1>
        <p>Discover the journey behind our premium beauty products</p>
      </div>

      <div className="about-content">
        <div className="about-section" data-aos="fade-right" data-aos-duration="1000">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              We believe in creating beauty products that enhance your natural
              features while being kind to your skin. Our mission is to provide
              high-quality, cruelty-free cosmetics that make you feel confident
              and beautiful.
            </p>
          </div>
          <div className="about-image">
            <img src="/productimages/compact.png" alt="Our Mission" />
          </div>
        </div>

        <div className="about-section reverse" data-aos="fade-left" data-aos-duration="1000">
          <div className="about-text">
            <h2>Quality Ingredients</h2>
            <p>
              We source only the finest ingredients from around the world,
              ensuring that each product meets our high standards of quality and
              effectiveness. Our formulas are carefully crafted to deliver
              exceptional results.
            </p>
          </div>
          <div className="about-image">
            <img
              src="/productimages/foundation.png"
              alt="Quality Ingredients"
            />
          </div>
        </div>

        <div className="about-section" data-aos="fade-right" data-aos-duration="1000">
          <div className="about-text">
            <h2>Sustainability</h2>
            <p>
              We're committed to reducing our environmental impact. Our
              packaging is recyclable, and we're constantly working to improve
              our sustainability practices across all aspects of our business.
            </p>
          </div>
          <div className="about-image">
            <img src="/productimages/lipgloss.png" alt="Sustainability" />
          </div>
        </div>
      </div>

      <div className="team-section" data-aos="fade-up" data-aos-duration="1000">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member" data-aos="zoom-in" data-aos-duration="1000">
            <div className="member-image">
              <img src="/productimages/mascara.png" alt="Team Member" />
            </div>
            <h3>Sarah Johnson</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member" data-aos="zoom-in" data-aos-duration="1200">
            <div className="member-image">
              <img
                src="/productimages/eyeshadowpallete.png"
                alt="Team Member"
              />
            </div>
            <h3>Michael Chen</h3>
            <p>Creative Director</p>
          </div>
          <div className="team-member" data-aos="zoom-in" data-aos-duration="1400">
            <div className="member-image">
              <img src="/productimages/gleamingstick.png" alt="Team Member" />
            </div>
            <h3>Emma Rodriguez</h3>
            <p>Product Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
