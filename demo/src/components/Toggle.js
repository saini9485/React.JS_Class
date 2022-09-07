import React, { Component } from "react";
export class Toggle extends Component {
  // state -> store some data inside a variable
  constructor(props) {
    super(props);
    // we can change this state value , means state value are changeable
    this.state = {
      isToggleOn: false,
    };
  }
  handleClick = (click) => {
    console.log(this);
    console.log(click);
    this.setState({
      isToggleOn: !this.state.isToggleOn,
    });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}   
      </button>
    );
  }
}