import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faWhatsapp,
  faInstagram,
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const [yr, setYr] = useState("");
  useEffect(() => {
    setYr(year);
  }, [year]);
  return (
    <>
      <div className="footerDivTotal">
        <div className="footerDivTop">
          <div className="footerDivTop1">
            <Link to="/">
              <img
                src={logo}
                alt="This is the Logo"
                className="footerLogoImg"
              />
            </Link>
          </div>
          <div className="footerDivTop2">
            <div className="footerCards">
              <p className="cardHeads">Get to Know us</p>
              <div>About us</div>
              <div>Careers</div>
              <div>Press Releases</div>
            </div>
            <div className="footerCards">
              <p className="cardHeads">About us</p>
              <div>Manikanta Vinjamuri</div>
              <div>Full Stack Developer Intern</div>
              <div>@Gradious Technologies (P) Ltd.</div>
              <div>Madhapur, Hyderabad</div>
            </div>
            <div className="footerCards">
              <p className="cardHeads">Connect with us</p>
              <div className="socialIcons">
                <div>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    beat
                    style={{ color: "#ffffff" }}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    spinPulse
                    style={{ color: "#ffffff" }}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    shake
                    style={{ color: "#ffffff" }}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faTelegram}
                    bounce
                    style={{ color: "#ffffff" }}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    spin
                    style={{ color: "#ffffff" }}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faUser}
                    flip
                    style={{ color: "#ffffff" }}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    beatFade
                    style={{ color: "#ffffff" }}
                  />
                </div>
              </div>
            </div>
            <div className="footerCards">
              <p className="cardHeads">Contact Support</p>
              <div>Raise Ticket</div>
            </div>
          </div>
        </div>
        <div className="footerDivBottom">
          <div className="footerDivBottom1">
            <div className="footerDivBottom11">
              <Link to="/terms-and-conditions" className="tAndCPp">
                Terms & Conditions
              </Link>
            </div>
            <div className="footerDivBottom22">
              <Link to="/privacy-policy" className="tAndCPp">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="footerDivBottom2">
            © 2002-{yr}, manikart.vercel.app, Inc.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
