import React, { useEffect, useState } from "react";
import "../styles/events.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Events = () => {
  const images = [
    "/events/collegekiosk.png",
    "/events/fairkiosk.png",
    "/events/mallkiosk.png",
    "/events/mallkiosk2.png",
    "/events/openkiosk.png",
    "/events/supermarketkiosk.png",
  ];

  const [current, setCurrent] = useState(0);
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(
          "https://hixcosmetics-default-rtdb.firebaseio.com/Events.json"
        );
        const data = Object.values(res.data)[0]; // get the array inside the key
        setEventsData(data);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      <div className="hero-slider" style={{ marginTop: "100px" }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === current ? "active" : ""}`}
          />
        ))}
        <div className="hero-overlay">
          <h1>Catch Us At These Events!</h1>
          <p>
            Explore where HIX Cosmetics is making waves — colleges, malls, and
            more!
          </p>
        </div>
      </div>

      <div className="events-page">
        <h2
          style={{
            fontSize: "32px",
            marginBottom: "20px",
            textAlign: "center",
            color: "#d1007f",
            fontWeight: "bold",
          }}
        >
          Upcoming Events (Nov–Dec 2025)
        </h2>
        <div className="event-cards">
          {loading ? (
            <p className="loading">Loading events...</p>
          ) : (
            eventsData.map((event, index) => (
              <div
                key={index}
                className="event-card"
                style={{ textAlign: "center" }}
              >
                <h3>{event.title}</h3>
                <p>
                  <strong style={{ textDecoration: "underline" }}>
                    {" "}
                    {event.location}
                  </strong>
                </p>
                <p>
                  <strong>Date:</strong> {event.date}
                </p>

                <p>{event.details}</p>
                <button>
                  <Link to={"/login/signup"}>
                    <b>RSVP?</b>
                  </Link>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Events;
