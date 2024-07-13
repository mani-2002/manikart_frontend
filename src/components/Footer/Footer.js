import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
const Footer = () => {
  return (
    <div className="totaldiv">
      <div className="footertopdiv">
        <Link to="/">
          <img src={logo} alt="This is the logo" className="footerimg" />
        </Link>
      </div>
      <div className="footerbottomdiv">
        <div className="footerbottomdiv1">
          <a href="/" className="footerbottomanchor1">
            Conditions of Use & Sale
          </a>
          <a href="/" className="footerbottomanchor2">
            Privacy Notice
          </a>
        </div>
        <div className="footerbottomdiv2">
          © 2002-2024, Manikart.vercel.app, Inc.
        </div>
      </div>
    </div>
  );
};

export default Footer;
