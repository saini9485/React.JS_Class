import React, { Component } from "react";

export class TitleChangeClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("did mount");
    document.title = `${this.state.count} times clicked`;
  }

  componentDidUpdate() {
    console.log("did update");
    document.title = `${this.state.count} times clicked`;
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <button onClick={this.handleClick}>click - {this.state.count}</button>
    );
  }
}