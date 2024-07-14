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
              <div>
                <Link to="/about-us" className="btn" id="footerBtns">
                  About us
                </Link>
              </div>
              <div>
                <Link to="/careers" className="btn" id="footerBtns">
                  Careers
                </Link>
              </div>
              <div>
                <Link to="/press-releases" className="btn" id="footerBtns">
                  Press Releases
                </Link>
              </div>
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
                  <a
                    href="https://www.facebook.com/profile.php?id=100070240689131"
                    target="._blank"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      beat
                      style={{ color: "#ffffff" }}
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/_m_a_n_i_2002_/"
                    target="._blank"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      spinPulse
                      style={{ color: "#ffffff" }}
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://api.whatsapp.com/send?phone=8522845343"
                    target="._blank"
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      shake
                      style={{ color: "#ffffff" }}
                    />
                  </a>
                </div>
                <div>
                  <a href="https://t.me/mani_2_0_0_2" target="._blank">
                    <FontAwesomeIcon
                      icon={faTelegram}
                      bounce
                      style={{ color: "#ffffff" }}
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://twitter.com/MANIKANTAV91524"
                    target="._blank"
                  >
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      spin
                      style={{ color: "#ffffff" }}
                    />
                  </a>
                </div>
                <div>
                  <a href="https://maniportf.vercel.app/" target="._blank">
                    <FontAwesomeIcon
                      icon={faUser}
                      flip
                      style={{ color: "#ffffff" }}
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/manikanta-vinjamuri-57827a239/"
                    target="._blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      beatFade
                      style={{ color: "#ffffff" }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="footerCards">
              <p className="cardHeads">Contact Support</p>
              <div>
                <Link to="/raise-ticket" id="footerBtns" className="btn">
                  Raise Ticket
                </Link>
              </div>
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
