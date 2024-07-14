import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import RetAndOrds from "./pages/RetAndOrds/RetAndOrds";
import SigninAndRegister from "./pages/SigninAndRegister/SigninAndRegister";
import Search from "./pages/Search/Search";
import Footer from "./components/Footer/Footer";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/signin-register" element={<SigninAndRegister />} />
          <Route path="/ret-ords" element={<RetAndOrds />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
