import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faMagnifyingGlass,
  faGlobe,
  faCartShopping,
  faBars,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [langMenu, setLangMenu] = useState(false);
  const toggleLangMenu = () => {
    setLangMenu(!langMenu);
  };
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
            <Link to="/signin-register" className="btn btn-primary m-2">
              Sign In
            </Link>
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
          <Link to="/search">
            <button className="btn btn-danger" id="searchIcon">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#ffffff" }}
              />
            </button>
          </Link>
        </div>
        <div className="navBarRight">
          <div className="navBarRightLang">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-lang">
                <FontAwesomeIcon icon={faGlobe} style={{ color: "#ffffff" }} />{" "}
                EN
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/">HI</Dropdown.Item>
                <Dropdown.Item href="/">TA</Dropdown.Item>
                <Dropdown.Item href="/">TE</Dropdown.Item>
                <Dropdown.Item href="/">KN</Dropdown.Item>
                <Dropdown.Item href="/">ML</Dropdown.Item>
                <Dropdown.Item href="/">BN</Dropdown.Item>
                <Dropdown.Item href="/">MR</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="navBarRightSignin">
            <Link to="/signin-register">
              <button className="btn btn-primary">Signin</button>
            </Link>
          </div>
          <div className="navBarRightRetOrd">
            <Link to="/ret-ords" className="btn" id="navBarRightRetOrd">
              Returns & Orders
            </Link>
          </div>
          <div className="navBarRightCart">
            <Link to="/cart" id="navBarRightCart">
              <div>0</div>
              <div>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ color: "#ffffff" }}
                  size="xl"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="navBarRightEllipsis">
          <div className="ellipsisSignIn">
            <Link
              to="/signin-register"
              className="btn btn-primary"
              style={{ fontSize: "15px" }}
            >
              Sign In
            </Link>
          </div>
          <button className="btn" onClick={toggleShowMenu} id="faBarsIcon">
            <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="showMenuDiv">
          <ul className="showMenuUl">
            <li className="showMenuLi">
              <div className="langDivDropDown" onClick={toggleLangMenu}>
                <button className="btn w-100" id="showMenuBtns">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    style={{ color: "#ffffff" }}
                  />{" "}
                  EN{" "}
                  {langMenu ? (
                    <FontAwesomeIcon icon={faCaretDown} flip="vertical" />
                  ) : (
                    <FontAwesomeIcon icon={faCaretDown} />
                  )}
                </button>
              </div>
              {langMenu && (
                <div className="langDropDownDiv">
                  <ul className="langDropDownUl">
                    <li className="langDropDownLi">
                      <button className="btn w-100" id="langDdBtns">
                        HI
                      </button>
                    </li>
                    <li className="langDropDownLi">
                      <button className="btn w-100" id="langDdBtns">
                        TA
                      </button>
                    </li>
                    <li className="langDropDownLi">
                      <button className="btn w-100" id="langDdBtns">
                        TE
                      </button>
                    </li>
                    <li className="langDropDownLi">
                      <button className="btn w-100" id="langDdBtns">
                        KN
                      </button>
                    </li>
                    <li className="langDropDownLi">
                      <button className="btn w-100" id="langDdBtns">
                        ML
                      </button>
                    </li>
                    <li className="langDropDownLi">
                      <button className="btn w-100" id="langDdBtns">
                        BN
                      </button>
                    </li>
                    <li className="langDropDownLi">
                      <button className="btn w-100" id="langDdBtns">
                        MR
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="showMenuLi">
              <button className="btn w-100" id="showMenuBtns">
                Returns & Orders
              </button>
            </li>
            <li className="showMenuLi">
              <button className="btn w-100" id="showMenuBtns">
                Cart
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
