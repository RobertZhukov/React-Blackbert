import React from "react";
import "./slider_banner.css";

const SliderBanner = () => {
  return (
    <div className="banner">
      <div className="slider-banner visible">
        <img src={require("../../img/banner_3.jpg")} alt="banner"></img>
      </div>
      <div className="slider-banner">
        <img src={require("../../img/banner_1.jpg")} alt="banner"></img>
      </div>
      <div className="slider-banner">
        <img src={require("../../img/banner_4.jpg")} alt="banner"></img>
      </div>
	  <div className="choice-banner">
		<i class="fas fa-chevron-right"></i>
		<i class="fas fa-chevron-left"></i>
	  </div>
    </div>
  );
};

export default SliderBanner;
