import React from "react";
import { MDBCol } from "mdbreact";
import "bootstrap/dist/css/bootstrap.css";
import cart from "../images/cart.svg";
import Dropdown from "react-bootstrap/Dropdown";
import search from "../images/search.png";

function HomeNav1() {
  return (
    <div
      style={{
        display: "flex",
        borderBottom: "1px solid black",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "1vh",
        backgroundColor: "black",
        width: "100vw",
        fontFamily: "times new roman",
      }}
    >
      <div
        style={{
          cursor: "pointer",
          color: "white",
          fontSize: "4vh",
          fontFamily: "times new roman",
        }}
      >
        Manikart
      </div>
      <div
        style={{
          padding: "1vh",
          cursor: "pointer",
          color: "white",
        }}
      >
        Deliver to loguser
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid black",
        }}
      >
        <Dropdown>
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-basic"
            style={{
              borderRadius: "5px 0 0 5px",
              borderRight: "none",
              padding: "1vh",
              height: "5.9vh",
            }}
          >
            All
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div>
          <MDBCol md="6">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "80vh", borderRadius: "0", height: "5.9vh" }}
            />
          </MDBCol>
        </div>
        <div
          style={{
            cursor: "pointer",
          }}
        >
          <button
            style={{
              backgroundColor: "orange",
              height: "5.9vh",
              borderRadius: "0 5px 5px 0",
              padding: "1vh",
              border: "none",
            }}
          >
            <img src={search} alt="" style={{ height: "3vh", width: "2vw" }} />
          </button>
        </div>
      </div>
      <div style={{ border: "1px solid black" }}>
        <Dropdown>
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-basic"
            style={{
              borderRight: "none",
              padding: "1vh",
              height: "5.9vh",
            }}
          >
            Select Language
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">English</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Telugu</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Francis</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div style={{ border: "1px solid black" }}>
        <Dropdown>
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-basic"
            style={{
              borderRight: "none",
              padding: "1vh",
              height: "5.9vh",
            }}
          >
            Hello Signin
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">English</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Telugu</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Francis</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div style={{ padding: "1vh", cursor: "pointer", color: "white" }}>
        Returns & Orders
      </div>
      <div>
        <img
          src={cart}
          alt="this is the cart logo"
          style={{
            cursor: "pointer",
            width: "4vw",
            height: "5vh",
          }}
        />
      </div>
    </div>
  );
}

export default HomeNav1;
