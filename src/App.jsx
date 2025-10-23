import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import Contact from "./pages/contact.jsx";
import Internship from "./pages/internship.jsx";
// import Contact from "./pages/contact.jsx";
// import About from "./pages/about-us";
import "./styles/config.css";
import "./styles/libs.css";
import "./styles/style.css";
import "./styles/responsive.css";
import "./styles/PortfolioCarousel.css";
// import "./styles/header.css";
import "./styles/stg.css"; // Added grid system styles
import "./styles/langSwitcher.css";
const App = () => {
  return (
    <Router>
      <div className="bringer-site-wrap">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers/internship" element={<Internship />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
