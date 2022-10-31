import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageSlider.css";

const ImageSlider = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="../Assets/Images/1.jpg" />
          <h2>
            <i>Kitchen Items</i>
          </h2>
        </div>
        <div>
          <img src="../Assets/Images/2.jpg" />
          <h2>
            <i>Fruits and Vegetables</i>
          </h2>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
