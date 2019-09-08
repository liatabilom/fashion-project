import React, { Component } from "react";
import Slide from "./components/Slide";
import RightArrow from "./components/RightArrow";
import LeftArrow from "./components/LeftArrow";
import "./InnerCard.css";

class InnerCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        "https://i.imgur.com/iRcnQT6.jpg",
        "https://i.imgur.com/JMScj7r.jpg",
        "https://i.imgur.com/F5acUjB.jpg",
        "https://i.imgur.com/FqlYSAx.jpg"
      ],
      currentIndex: 0,
      translateValue: 0
    };
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div className="container mt-2 innerSlider">
        <div className="card-body col-9 innerCard">
          <div className="slider">
            <div
              className="slider-wrapper"
              style={{
                transform: `translateX(${this.state.translateValue}px)`,
                transition: `transform ease-out 0.45s`
              }}
            >
              {this.state.images.map((image, i) => (
                <Slide image={image} key={i} />
              ))}
            </div>
            <div className="card-body col-3 innerCard">cenas</div>
            <LeftArrow goToPrevSlide={this.goToPrevSlide} />
            <RightArrow goToNextSlide={this.goToNextSlide} />
          </div>
        </div>
      </div>
    );
  }
}

export default InnerCard;
