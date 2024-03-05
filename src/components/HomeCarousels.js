import React from "react";
import Carousel from "react-bootstrap/Carousel";
import coros1 from "../images/coros1.jpg";
import coros2 from "../images/coros2.jpg";
import coros3 from "../images/coros3.jpg";
import coros4 from "../images/coros4.jpg";
import coros5 from "../images/coros5.jpg";
import coros6 from "../images/coros6.jpg";
import coros7 from "../images/coros7.jpg";
import coros8 from "../images/coros8.jpg";

function HomeCarousels() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img src={coros1} alt="" style={{ height: "100vh" }} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={coros2} alt="" style={{ height: "100vh" }} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={coros3} alt="" style={{ height: "100vh" }} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={coros4} alt="" style={{ height: "100vh" }} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={coros5} alt="" style={{ height: "100vh" }} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={coros6} alt="" style={{ height: "100vh" }} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={coros7} alt="" style={{ height: "100vh" }} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={coros8} alt="" style={{ height: "100vh" }} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeCarousels;
