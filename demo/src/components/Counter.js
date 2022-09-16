import React, {Component}from "react";
 export class App extends Component{
  constructor(){
    super ()
    this.state ={
    //   count :0
    count :this.props.count||0
    }
  }
  increment =()=>{
    this.setState({ count: this.state.count+1})
  }
  decrement =()=>{
    this.setState({ count: this.state.count-1})
  }
 render()
 {
  return(
    <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.increment}>Addd</button>
      <button onClick={this.decrement}>Substract </button>
    </div>
  )
 }

}