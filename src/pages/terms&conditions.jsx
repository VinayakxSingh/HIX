import React from "react";
import "../styles/terms.css";
const TermsandConditions = () => {
  const termsAndConditions = [
    {
      title: "Use of Website",
      content:
        "You must be at least 13 years old to use our site. You agree to use our services only for lawful purposes and not to engage in any activity that could harm the site, users, or our brand.",
    },
    {
      title: "Account Information",
      content:
        "You are responsible for keeping your account and password secure. We are not liable for any loss or damage arising from unauthorized access to your account.",
    },
    {
      title: "Product Information",
      content:
        "We make every effort to ensure our product details, pricing, and availability are accurate. However, we reserve the right to correct errors, update information, or cancel orders if any information is inaccurate at any time.",
    },
    {
      title: "Orders & Payments",
      content:
        "When you place an order, you agree that all details provided are accurate and complete. Orders may be canceled if payment is declined or if there is an issue with stock availability.",
    },
    {
      title: "Shipping & Delivery",
      content:
        "Delivery times are estimates only. We are not responsible for delays caused by external factors such as courier issues, weather conditions, or customs processing.",
    },
    {
      title: "Returns & Refunds",
      content:
        "You may return items in accordance with our Return Policy. Refunds will be processed to the original payment method once we receive and inspect the returned product.",
    },
    {
      title: "Intellectual Property",
      content:
        "All content on this site (text, images, logos, graphics, etc.) is the property of HIX Cosmetics or its licensors and is protected by copyright and intellectual property laws. Do not use or reproduce any material without permission.",
    },
    {
      title: "Limitation of Liability",
      content:
        "We are not liable for any damages or losses resulting from your use of this site, including but not limited to indirect or incidental damages, data loss, or service interruptions.",
    },
    {
      title: "Privacy",
      content:
        "Your use of the site is also governed by our Privacy Policy, which outlines how we collect, use, and protect your information.",
    },
    {
      title: "Changes to Terms",
      content:
        "We may update these Terms and Conditions from time to time. Changes will be posted on this page with a revised “last updated” date.",
    },
    {
      title: "Contact Us",
      content:
        "If you have any questions about these Terms, please contact us at: support@hixcosmetics.com or visit us at 334 roshnara road Delhi",
    },
  ];

  return (
    <div className="terms-container">
      <hr />
      <h1>Terms and Conditions</h1>
      <p>
        Last updated: April 8, 2025. Welcome to HIX Cosmetics! Please read these
        Terms and Conditions carefully before using our website or services. By
        accessing or using our website, you agree to be bound by these terms. If
        you do not agree with any part of the terms, please do not use our site.
      </p>
      {termsAndConditions.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
      <hr />
    </div>
  );
};

export default TermsandConditions;
