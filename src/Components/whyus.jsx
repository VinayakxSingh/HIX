import React from "react";
import shipping from "../assets/shipping.jpg";
import ingredients from "../assets/natural.jpg";
import approved from "../assets/derma.jpg";
import support from "../assets/customercare.jpg";
import pay from "../assets/pay.jpg";
import customizable from "../assets/customize.jpg";
import "../styles/why.css";

const reasons = [
  {
    title: "Fast & Free Shipping",
    desc: "Enjoy lightning-fast delivery on all orders over ₹999, right to your doorstep without any extra cost.",
    img: shipping,
  },
  {
    title: "Pure & Natural Formulas",
    desc: "Crafted using clean, gentle, cruelty-free ingredients sourced from nature for effective and safe skincare.",
    img: ingredients,
  },
  {
    title: "Trusted by Dermatologists",
    desc: "All HIX products are tested, approved, and recommended by skincare professionals for all skin types.",
    img: approved,
  },
  {
    title: "Round-the-Clock Support",
    desc: "Our support team is available 24/7 to help you with product queries, orders, or skincare advice.",
    img: support,
  },
  {
    title: "Secure & Hassle-Free Payments",
    desc: "Your transactions are safe with us—end-to-end encrypted, fast, and seamless checkout experience.",
    img: pay,
  },
  {
    title: "Customizable Products",
    desc: "Personalize your HIX skincare! Choose ingredients and add your name to the bottle—it’s uniquely yours.",
    img: customizable,
  },
];

const Why = () => {
  return (
    <section className="why-section">
      <h2 className="why-heading">Why Choose Us?</h2>
      <div className="why-cards">
        {reasons.map((item, idx) => (
          <div key={idx} className="why-card" style={{ color: "plum" }}>
            <img src={item.img} alt={item.title} className="why-icon" />
            <div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why;
