import React, { Component } from "react";
import "./LoginPage.css"
export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
   data:[{
      userName:"Rajesh",
      password:"1234",
   }]
    }
      }
      render() {
        return (
          <div>
          <input type ="text" placeholder="interName">UserName</input>
          <input type ="text" placeholder="password">password</input>
          <button onClick={this.props.data} className="btnClass" >Login</button>
          </div>
        );
  }
    }


