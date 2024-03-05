import React from "react";
import HomeNav1 from "../components/HomeNav1";
import HomeNav2 from "../components/HomeNav2";
import HomeCarousels from "../components/HomeCarousels";

function Home() {
  return (
    <div>
      <HomeNav1 />
      <HomeNav2 />
      <div
        className="app-container"
        style={{ position: "relative", height: "100vh" }}
      >
        <HomeCarousels />
        <div
          className="content-container"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: "1", // Added comma here
            marginTop: "45vh",
          }}
        >
          mani
        </div>{" "}
      </div>
    </div>
  );
}

export default Home;
