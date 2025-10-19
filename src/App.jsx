// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
// import Contact from "./pages/contact.jsx";
// import About from "./pages/about-us";
import "./styles/config.css";
import "./styles/libs.css";
import "./styles/style.css";
import "./styles/responsive.css";
import "./styles/PortfolioCarousel.css";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
