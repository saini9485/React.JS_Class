import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCREAMENT":
      return state + 1;
    case "DECREAMENT":
      return state - 1;
    case "RESET":
      return initialState;    
      default:
        return state; 
  }
};

export function ReducerCounter(){
   // const [] = useReducer(initialState)
   const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <>
        <h1>count-{count}</h1>
        <button onClick={()=>dispatch("INCREAMENT")}>Increament</button>
        <button onClick={()=>dispatch("DECREAMENT")}>Decreament</button>
        <button onClick={()=>dispatch("RESET")}>Reset</button>
        </>
    )
}
