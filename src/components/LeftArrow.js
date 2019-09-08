import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

const LeftArrow = props => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <FontAwesomeIcon
        icon={faChevronCircleLeft}
        size="1x"
        className="leftArrow"
        aria-hidden="true"
      />
    </div>
  );
};

export default LeftArrow;
