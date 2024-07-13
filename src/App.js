import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Aboutus from "./pages/Aboutus/Aboutus";
import Contactus from "./pages/Contactus/Contactus";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/contact-us" element={<Contactus />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
