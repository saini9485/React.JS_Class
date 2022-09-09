import React, { Component } from "react";
import { WelcomeClass } from "./componets/WelcomeClass";

export class WelcomeClass extends Component {
  render() {
    console.log(this.props);
    const { name, age, gender, place } = this.props;
    // this.props.name = "Rajesh";  // Props are read only data
    return (
      <div>
        <Child />
        <h1>
          {/* Welcome to aircampus {this.props.name}. My age is {this.props.age}. */}
          <p>place - {place}</p>
          <p>gender - {gender}</p>
          Welcome to aircampus {name}. My age is {age}. Class Component
        </h1>
      </div>
    );
  }
}