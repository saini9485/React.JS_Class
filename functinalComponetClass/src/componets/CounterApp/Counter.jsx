//Example:-1 //Counter app  using useState Hooks

import React, { useState } from "react";

export function CounterApp() {
    const INITIAL_COUNT=0;
    const [count, setCount]=useState(0)
  return (
    <>
      <h1>CounterApp</h1>
      <h3>Count:{count}</h3>
      <button onClick={()=> setCount(count+1)}>Increament</button>
      <button onClick={()=>setCount(count-1)}>Decreament</button>
      <button onClick={()=>setCount(INITIAL_COUNT)}>Reset</button>
    </>
  );
}
