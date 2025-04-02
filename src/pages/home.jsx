import React, { useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import Hero from "../Components/herosection";
import "../styles/home.css";
import axios from "axios";

const Home = () => {
  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const response = await axios.get(
          "https://hixcosmetics-default-rtdb.firebaseio.com/products/-OMd69SZhO3oGC_mTaD3.json"
        );

        console.log("Firebase Data:", response.data);

        if (response.data) {
         
          const productData = Object.values(response.data)[0];


          setBestsellers(Object.entries(productData));
        } else {
          console.log("❌ Vinayak Data nahi fetch ho raha", response);
        }
      } catch (error) {
        console.error("❌ Error fetching bestsellers from Firebase:", error);
      }
    };

    fetchBestsellers();
  }, []);

  return (
    <div className="home-container" style={{ marginTop: "100px" }}>
      <Hero />
      <div className="home-content">
        <h1
          style={{
            marginBottom: 0,
            fontFamily: "Bebas Neue, sans-serif",
            fontWeight: 700,
            fontSize: "64px",
            lineHeight: 1.2,
            color: "#fff",
            display: "block",
            width: "100%",
            textDecoration: "underline",
            fontStyle: "italic",
            textAlign: "center", // Optional: Centers the text
          }}
        >
          Our Bestsellers
        </h1>

        <p
          style={{
            marginTop: 0,
            fontFamily: "Bebas Neue, sans-serif",
            fontWeight: 300,
            fontSize: "34px",
            lineHeight: 1.2,
            color: "#fff",
          }}
        >
          Our bestsellers are carefully curated to meet your needs. Browse
          through our collection
        </p>
      </div>
      <div className="bestseller-cards">
        {bestsellers.map(([key, product]) => (
          <div className="bestcards" key={key}>
            <img src={product.image} alt={product.name || "Product Image"} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
