import React from "react";
import { createContext } from "react";
import { Child1 } from "./Child1";
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";
const data = createContext();
const data1 = createContext();
export function Parent() {
  const name = "Rajesh";
  const age = 20;
  return (
    <div>
      <h1>Parent</h1>
      < Child1 />
       <Child2 />
      <data.Provider value={name}>
        <data1.Provider value ={age} >
        <Child3 />
        </data1.Provider>
      </data.Provider>
    </div>
  );
}
export {data,data1}
