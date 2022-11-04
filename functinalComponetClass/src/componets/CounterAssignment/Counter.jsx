//  import React from 'react'
//  import { useState, useEffect } from 'react'
// export  function Counter() {
//    const [count, setCount] = useState(0)
//    const [btn, setBtn] = useState("Increament")
//   useEffect(() => {
//     // document.title = `You clicked ${count} times`;
//    (count===10)?
//  setBtn("Decreament"):setBtn("increament")

//   } ,[count]);

// const increament = ()=>{
//   setCount(count+1)

// }
// const Decreament = ()=>{
//   setCount(count-1)
// }
// const handleClick = ()=>{
//   (btn)? (increament()):(Decreament())
// }

//   return (
//     <div>
//      <h1>CounterAssignment</h1>
//      <h1>Count {count}</h1>
//      <div className='btn' >
//      <button onClick={handleClick}>Increament</button>
//      </div>
//       </div>
//   )
// }

import React from "react";
import { useState } from "react";
export  function Counter() {
  let [count, setCount] = useState(0);
  let [state, setState] = useState(true);
  let incrementCounter = () => setCount(count + 1);
  let decrementCounter = () => setCount(count - 2);
  
  let handleCount = () => {
    if (state === true) {
      if (count < 10) {
        incrementCounter();
      }
      if (count === 10) {
        decrementCounter();
        setState(false);
        // document.querySelector("button").innerHTML = "decrement";
      }
    }
    if (state === false) {
      if (count < 10) {
        decrementCounter();
      }
      if (count === 0) {
        incrementCounter();
        setState(true);
        // document.querySelector("button").innerHTML = "Increment";
      }
    }
  };
  
 


  return (
    <div className="btn">
      {/* {date.currentDateTime} */}
      <h1>{count}</h1>
      <button
        onClick={() => {
          handleCount();
        }}
      >
        {state ? 'Increment' : 'Decreament'}
      </button>
      <button
        className="name"
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>
    </div>
  );
}