import React, { Component } from "react";
// optimsation of react components

// shouldComponentUpdate() -> by default return true

export class RegularComp extends Component {
  render() {
    console.log("----Regular component-----", this.props.name);
    return <p>Regular component - {this.props.name}</p>;
  }
}