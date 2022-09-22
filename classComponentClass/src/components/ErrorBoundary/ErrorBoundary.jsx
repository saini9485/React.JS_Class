import React, { Component } from "react";
import { Dummy } from "./Dummy";
// {UIBackup} from "./UIBackup"

export class ErrorBoundary extends Component {
  render() {
    return (
      <div>
        <p> ErrorBoundary</p>
        <Dummy country="India"/>
        <Dummy country="USA" />
        <Dummy country="Rassia"/>
      </div>
    );
  }
}
