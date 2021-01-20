import React from "react";
import "./burger_menu.css";

const BurgerMenu = () => {
  return (
    <div>
      <div className="burger">
        <i className="fas fa-bars"></i>
      </div>
      <div className="cross">
        <i className="fas fa-times"></i>
      </div>
    </div>
  );
};

export default BurgerMenu;
