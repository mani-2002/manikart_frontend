import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import user from "../../images/user.png";

const Footer = () => {
  return (
    <div className="totaldiv">
      <div className="footertopdiv">
        <Link to="/">
          <img src={logo} alt="This is the logo" className="footerimg" />
        </Link>
        <div className="footertopdivb">
          <div className="div1">
            <p className="cardhead">Categories </p>
            <ul className="cardul">
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
              <li>Category 4</li>
              <li>Category 5</li>
              <li>Category 6</li>
            </ul>
          </div>
          <div className="div2">
            <p className="cardhead">About us</p>
            <div>Manikanta Vinjamuri</div>
            <div>Full Stack Developer Intern</div>
            <div>@Gradious Technologies</div>
            <div>+918522845343</div>
            <div>manikantavinjamuri8522@gmail.com</div>
          </div>
          <div className="div3">
            <p className="cardhead">Get to Know us </p>
            <div>About us</div>
            <div>Careers</div>
            <div>Press Release</div>
          </div>
          <div className="div4">
            <p className="cardhead">Connect with us</p>
            <div className="socialicons">
              <div>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  beatFade
                  style={{ color: "#4de0ea" }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faXTwitter}
                  style={{ color: "#ffffff" }}
                  spin
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faInstagram}
                  spinPulse
                  style={{ color: "#d64c96" }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faGoogle}
                  bounce
                  style={{ color: "#ffffff" }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  flip
                  style={{ color: "#ffffff" }}
                />
              </div>
              <div>
                <img
                  src={user}
                  alt="This is My portfolio icon"
                  className="usericon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerbottomdiv">
        <div className="footerbottomdiv1">
          <a href="/" className="footerbottomanchor1">
            Terms and Conditions
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
