import React, { Component } from "react";
//import { PureComp } from "./PureComp";
//import { RegularComp } from "./RegularComp";

export class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rajesh",
    };
  }

  render() {
    console.log("----Parent component-----");
    return (
      <>
        <p>Parent component</p>
        <PureComp name={this.state.name} />
        <RegularComp name={this.state.name} />
        <button onClick={() => this.setState({ name: "Virendra" })}>
          change name
        </button>
        <button onClick={() => this.forceUpdate()}>force update</button>
      </>
    );
  }
}