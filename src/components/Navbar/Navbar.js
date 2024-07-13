import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import menuIcon from "../../images/menu-icon.png";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleBtnClick = () => {
    setShowMenu(false);
  };
  const [categoryMenu, setCategoryMenu] = useState(false);
  const toggleCategoryMenu = () => {
    setCategoryMenu(!categoryMenu);
  };
  return (
    <>
      <div className="navbartotal">
        <div className="navbardivleft">
          <Link to="/" className="btn">
            <img src={logo} alt="This is the logo" className="logoimg" />
          </Link>
        </div>
        <div className="navbardivmiddle">
          <input
            type="text"
            className="form-control"
            id="navbarsearchinput"
            placeholder="Type anything to search..."
          />
          <button className="btn btn-primary" id="navbarsearchicon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="navbardivright">
          <div>
            <Link to="/" className="btn" id="navbarbtns">
              Home
            </Link>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Categories
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/">Category 1</Dropdown.Item>
                <Dropdown.Item href="/">Category 2</Dropdown.Item>
                <Dropdown.Item href="/">Category 3</Dropdown.Item>
                <Dropdown.Item href="/">Category 4</Dropdown.Item>
                <Dropdown.Item href="/">Category 5</Dropdown.Item>
                <Dropdown.Item href="/">Category 6</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Link to="/about-us" className="btn" id="navbarbtns">
              About us
            </Link>
          </div>
          <div>
            <Link to="/contact-us" className="btn" id="navbarbtns">
              Contact us
            </Link>
          </div>
        </div>
        <div className="navbarright-ellipses">
          <button
            onClick={toggleShowMenu}
            className="btn"
            id="hamburger-menu-btn"
          >
            <img
              src={menuIcon}
              alt="Hamburger menu icon"
              className="menu-icon"
            />
          </button>
        </div>
      </div>
      {showMenu && (
        <div>
          <ul className="showmenuul">
            <Link to="/" className="navlinks" id="navbarbtns">
              <button
                className="btn w-100"
                id="menubtn"
                onClick={handleBtnClick}
              >
                Home
              </button>
            </Link>
            <Link className="navlinks" id="navbarbtns">
              <button
                className="btn w-100"
                id="menubtn"
                onClick={toggleCategoryMenu}
              >
                Categories
              </button>
            </Link>
            {categoryMenu && (
              <div className="categorymenudiv">
                <ul className="categorymenuul">
                  <li className="categorymenuli">
                    <Link className="btn w-100">Category 1</Link>
                  </li>
                  <li className="categorymenuli">
                    <Link className="btn w-100">Category 2</Link>
                  </li>
                  <li className="categorymenuli">
                    <Link className="btn w-100">Category 3</Link>
                  </li>
                  <li className="categorymenuli">
                    <Link className="btn w-100">Category 4</Link>
                  </li>
                  <li className="categorymenuli">
                    <Link className="btn w-100">Category 5</Link>
                  </li>
                  <li className="categorymenuli">
                    <Link className="btn w-100">Category 6</Link>
                  </li>
                </ul>
              </div>
            )}
            <Link to="/about-us" className="navlinks" id="navbarbtns">
              <button
                className="btn w-100"
                id="menubtn"
                onClick={handleBtnClick}
              >
                About us
              </button>
            </Link>
            <Link to="/contact-us" className="navlinks" id="navbarbtns">
              <button
                className="btn w-100"
                id="menubtn"
                onClick={handleBtnClick}
              >
                Contact us
              </button>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
