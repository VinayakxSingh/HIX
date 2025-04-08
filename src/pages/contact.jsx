import React from "react";
import "../styles/contact.css";
import axios from "axios";

const Contact = () => {
  //
  const handlesubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formsdata = new FormData(form);
    const data = Object.fromEntries(formsdata.entries());
    // console.log("data is created ", data);

    try {
      let post = await axios.post(
        "https://hixcosmetics-default-rtdb.firebaseio.com/contact-form.json",
        data
      );
      console.log(data, `is posted to db`, post);
    } catch (error) {
      console.error(error);
    }
  };

  //
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have a question or need support? Fill out the form below!</p>

      <div className="contact-form">
        <form action="submit" onSubmit={handlesubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="issues">What do you need help with?</label>
          <div className="select-wrapper">
            <select name="issues" required>
              <option value="order">Order Issues</option>
              <option value="payment">Payment Problems</option>
              <option value="technical">Technical Support</option>
              <option value="product">Product Inquiry</option>
              <option value="shipping">Shipping & Delivery</option>
              <option value="returns">Returns & Refunds</option>
              <option value="account">Account & Login</option>
              <option value="feedback">Give Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>

          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            placeholder="Write your message here..."
            rows="4"
            required
          ></textarea>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
