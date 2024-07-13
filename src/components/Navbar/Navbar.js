import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faMagnifyingGlass,
  faGlobe,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
  return (
    <>
      <div className="navBarTotal">
        <div className="navBarLogo">
          <div className="navBarImgDiv">
            <Link to="/" className="btn">
              <img
                src={logo}
                alt="This is the Logo"
                className="navBarLogoImg"
              />
            </Link>
          </div>
          <div style={{ color: "white" }} className="sgnAndReg">
            <button className="btn btn-primary m-2">Sign In</button>
          </div>
        </div>
        <div className="navBarLocation">
          <Link className="btn">
            <div className="locSymbol">
              <FontAwesomeIcon
                icon={faLocationCrosshairs}
                style={{ color: "#ffffff" }}
              />
            </div>
            <div className="detLoc">Update Your Location</div>
          </Link>
        </div>
        <div className="navBarSearch">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              All
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/">Grocery</Dropdown.Item>
              <Dropdown.Item href="/">Electronics</Dropdown.Item>
              <Dropdown.Item href="/">Fashion</Dropdown.Item>
              <Dropdown.Item href="/">Home & Furniture</Dropdown.Item>
              <Dropdown.Item href="/">Travel</Dropdown.Item>
              <Dropdown.Item href="/">Beauty</Dropdown.Item>
              <Dropdown.Item href="/">Books</Dropdown.Item>
              <Dropdown.Item href="/">Stationery</Dropdown.Item>
              <Dropdown.Item href="/">Baby Care</Dropdown.Item>
              <Dropdown.Item href="/">Sports & Fitness</Dropdown.Item>
              <Dropdown.Item href="/">Foods & Drinks</Dropdown.Item>
              <Dropdown.Item href="/">Vehicles</Dropdown.Item>
              <Dropdown.Item href="/">Toys</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <input
            type="text"
            placeholder="Type anything to Search..."
            className="form-control"
            id="searchBar"
          />
          <button className="btn btn-danger" id="searchIcon">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#ffffff" }}
            />
          </button>
        </div>
        <div className="navBarRight">
          <div className="navBarRightLang">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-lang">
                <FontAwesomeIcon icon={faGlobe} style={{ color: "#ffffff" }} />{" "}
                EN
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/">English</Dropdown.Item>
                <Dropdown.Item href="/">Hindi</Dropdown.Item>
                <Dropdown.Item href="/">Telugu</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="navBarRightSignin">
            <button className="btn btn-primary">Signin</button>
          </div>
          <div className="navBarRightRetOrd">
            <Link to="/" className="btn">
              Returns & Orders
            </Link>
          </div>
          <div className="navBarRightCart">
            <div>0</div>
            <div>
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "#ffffff" }}
                size="xl"
              />
            </div>
          </div>
        </div>
        <div className="navBarRightEllipsis">
          <div className="ellipsisSignIn">
            <button className="btn btn-primary" style={{ fontSize: "15px" }}>
              Sign In
            </button>
          </div>
          <button className="btn">
            <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
