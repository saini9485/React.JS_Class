import React, {Component}from "react";
 export class Counter extends Component{
  constructor(){
    super ()
    this.state ={
       count :0,max:10,min:0
    // count :this.props.count||0 
    }
  }
  increment =()=>{
    this.setState(this.state.count<this.state.max ?{count:this.state.count+1}:{count:this.state.count})
  }
  decrement =()=>{
    this.setState(this.state.count<=this.state.min ?{count:this.state.count}:{count:this.state.count-1})
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