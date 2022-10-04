//Example:-1 //useReducer Hook
//import React, { useReducer } from "react";
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "INCREAMENT":
//       return state + 1;
//     case "DECREAMENT":
//       return state - 1;
//     case "RESET":
//       return initialState;    
//       default:
//         return state; 
//   }
// };

// export function ReducerCounter(){
//    // const [] = useReducer(initialState)
//    const [count, dispatch] = useReducer(reducer, initialState)
//     return (
//         <>
//         <div className="btn">
//         <h1>Count-{count}</h1>
//         <button onClick={()=>dispatch("INCREAMENT")}>Increament</button>
//         <button onClick={()=>dispatch("DECREAMENT")}>Decreament</button>
//         <button onClick={()=>dispatch("RESET")}>Reset</button>
//         </div>
//         </>
//     )
// }



//Example:-2 
import React, { useReducer } from "react";
const initialState = {count: 0};
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export function UseReducer() {
  const [state, dispatch] = useReducer( reducer, initialState);
  return (
    <>  
    <div className="btn">
     <h1> Count: {state.count}</h1>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </div>
    </>
  );
}
