//import React, {Component}from "react";
//  export class Counter extends Component{
//   constructor(){
//     super () 
//     this.state ={
//        count :0,max:15,min:0
//     // count :this.props.count||0 
//     }
//   }
//   increment =()=>{ 
//     this.setState(this.state.count<this.state.max ?{count:this.state.count+1}:{count:this.state.count})
//   }
//   decrement =()=>{
//     this.setState(this.state.count<=this.state.min ?{count:this.state.count}:{count:this.state.count-1})
//   }
//  render()
//  {
//   return(
//     <div className="Counter">
//       <h1>{this.state.count}</h1>
//       <button onClick={this.increment} className="add">Add</button>
//       <button onClick={this.decrement} className="Sub">Substract </button>
//     </div>
//   )
//  }

// }



//Counter with class component
import React, { Component } from "react";
export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <h3> Count: {this.state.count} Times</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          increment
        </button>
        <button onClick={() => this.setState({ count: this.state.count -1 })}>
          Decrement
        </button>
        <button onClick={() => this.setState({ count: this.state.count=(0) })}>
          Reset
        </button>
      </div>
    );
  }
}
