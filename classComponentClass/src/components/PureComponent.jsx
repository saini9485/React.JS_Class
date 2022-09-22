import React, { PureComponent } from "react";
// optimsation of react components

// shouldComponentUpdate -> validate current props and newly coming props
// if both are same, returns false
// if there is any diff, returns true

export class PureComp extends PureComponent {
  render() {
    console.log("----Pure component-----", this.props.name);
    return <p>Pure component - {this.props.name}</p>;
  }
}

// parent state -> vasanth changes
// child props -> child props changes
// updation phase -> compwilreceiveProps, shouldcompupdate,
// compwillupdate, render, compdidupdate

// state or props