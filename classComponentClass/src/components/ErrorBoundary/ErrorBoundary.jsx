import React, { Component } from "react";
import { Dummy } from "./Dummy";
// {UIBackup} from "./UIBackup"

export class ErrorBoundary extends Component {
  render() {
    return (
      <div>
        <h1> ErrorBoundary</h1>
        <Dummy country="India"/>
        <Dummy country="USA" />
        <Dummy country="Rassia"/>
      </div>
    );
  }
}
