import React, { Component } from "react";
export class Content extends Component {
  render() {
    return (
      <div className="content">
        <h3> This is Content no. {this.props.content}</h3>
        <p>
          React was created by Jordan Walke, a software engineer at Facebook,
          who released an early prototype of React called "FaxJS". He was
          influenced by XHP, an HTML component library for PHP. It was first
          deployed on Facebook's News Feed in 2011 and later on Instagram in
          2012.
        </p>
      </div>
    );
  }
}
