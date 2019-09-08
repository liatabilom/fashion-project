import React, { Component } from "react";
import InnerCard from "./InnerCard";

class Head extends Component {
  render() {
    return (
      <div>
        <section>
          <h1>
            <header className="header .d-sm-flex">
              Na'dia
              <br />
              Correia Gonc,alves
            </header>
          </h1>
        </section>
        <h2>
          <InnerCard />
        </h2>
      </div>
    );
  }
}

export default Head;
