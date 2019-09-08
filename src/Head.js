import React, { Component } from "react";
import InnerSlider from "./InnerSlider";

class Head extends Component {
  render() {
    return (
      <div>
        <h1>
          <header className="header .d-sm-flex">
            Na'dia
            <br />
            Correia Gonc,alves
          </header>
        </h1>
        <h2>
          <InnerSlider />
        </h2>
      </div>
    );
  }
}

export default Head;
