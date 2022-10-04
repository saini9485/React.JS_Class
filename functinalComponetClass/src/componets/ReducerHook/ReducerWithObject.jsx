//Example:-1 //useReducer Hook
import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return {...state, value: state.value + action.value};
    case "DECREAMENT":
      return{...state, value: state.value + action.value};
    case "RESET":
      return initialState;    
      default:
        return state; 
  }
};

export function ReducerCounter(){
   // const [] = useReducer(initialState)
   const [countObj, dispatch] = useReducer(reducer, initialState)
    return (
        <>
        <div className="btn">
        <h1>Count-{countObj.value}</h1>
        <button onClick={()=>dispatch({type: "INCREAMENT", value:5})}>Increament</button>
        <button onClick={()=>dispatch({type: "DECREAMENT", value:5})}>Decreament</button>
        <button onClick={()=>dispatch({type: "RESET"})}>Reset</button>
        </div>
        </>
    )
}
