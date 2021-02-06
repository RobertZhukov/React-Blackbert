import React from "react";
import "./category_slider_header.scss";

const CategorySliderHeader = () => {
  return (
    <div className="category-slider-header">
      <div className="category-slider-title">
        <h3>Actual Categories</h3>
      </div>
      <div className="category-slider-tabs">
        <ul>
          <li>
            <a className="active" href="#">
              New Year
            </a>
          </li>
          <li>
            <a href="#">Uniq gifts</a>
          </li>
          <li>
            <a href="#">Love canvas</a>
          </li>
          <li>
            <a href="#">For teens</a>
          </li>
        </ul>
      </div>
      <div className="navigation-category-slider">
        <i className="fas fa-arrow-circle-left"></i>
        <i className="fas fa-arrow-circle-right"></i>
      </div>
    </div>
  );
};

export default CategorySliderHeader;
