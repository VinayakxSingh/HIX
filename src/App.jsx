import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Events from "./pages/events.jsx";
import ProductRanges from "./pages/product ranges.jsx";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Navbar from "./Components/navbar.jsx";
import Auth from "./pages/Auth.jsx";
import Hero from "./Components/herosection.jsx";
import Footer from "./Components/footer.jsx";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/product-ranges" element={<ProductRanges />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="login/signup" element={<Auth />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
