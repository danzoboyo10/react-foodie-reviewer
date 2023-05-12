import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlateUtensils } from "@fortawesome/fontawesome-free-solid";

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon className="leftForkKnife" icon="fas fa-utensils" />
      <FontAwesomeIcon className="leftSpoon" icon="fas fa-utensil-spoon" />
      FOODIE REVIEWER
      <FontAwesomeIcon className="rightSpoon" icon="fas fa-utensil-spoon" />
      <FontAwesomeIcon className="rightForkKnife" icon="fas fa-utensils" />
    </div>
  );
};

export default Header;
