import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const RightArrow = props => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <FontAwesomeIcon
        icon={faChevronCircleRight}
        size="1x"
        className="rightArrow"
        aria-hidden="true"
      />
    </div>
  );
};

export default RightArrow;
