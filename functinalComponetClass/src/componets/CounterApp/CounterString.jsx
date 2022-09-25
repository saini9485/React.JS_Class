import React, { useState } from "react";
export function CounterString() {
  const [name, setName] = useState("Rajesh");
  return (
    <>
      <h1>CounterString</h1>
      <h2>Name: {name}</h2>
      <button onClick={() => setName(name.toLocaleUpperCase())}>
        Captalization
      </button>
      <button onClick={() => setName(name.toLocaleLowerCase())}>
        LowerLater
      </button>
      <button onClick={()=> setName(name+" developer")}>ChangeName</button>
    </>
  );
}
