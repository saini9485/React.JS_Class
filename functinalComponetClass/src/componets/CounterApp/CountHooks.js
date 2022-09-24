//Example: -1 //CounterApp

// import React , {useState} from "react"
// export function CountHooks (){
//   const initialCount =0;
//   const [count, setCount] = useState(initialCount )
//   return(
//     <>
// <h1>count:{count}</h1>
// <button onClick={()=>setCount(count+1)}>Increament</button>
// <button onClick={()=>setCount(count-1)}>Decreament</button>
// <button onClick={()=>setCount(initialCount )}>Reset</button> 
// </>
//   )
// }


//Example: -2 //CounterApp another method for using initia Value
//Second Way to setInitial value create a new Component for then you can import this is right way 

// import React , {useState} from "react"
// import { INITIAL_COUNT } from "./Constant";
// export function CountHooks (){
//   const initialCount =0;
//   const [count, setCount] = useState(initialCount )
//   return(
//     <>
// <h1>count:{count}</h1>
// <button onClick={()=>setCount(count+1)}>Increament</button>
// <button onClick={()=>setCount(count-1)}>Decreament</button>
// <button onClick={()=>setCount(INITIAL_COUNT )}>Reset</button> 
// </>
//   )
// }


//Example: -3 //how to print multiple data 

// import React, { useState } from "react"
// import { INITIAL_COUNT } from "./Constant";
// export function CountHooks() {
//   const initialCount = 0;
//   const [count, setCount] = useState(initialCount)
//   const [name, setName] =useState("Rajesh Saini")

// //if we want to put condition in name the we can call funciton 
// // const handleName = ()=>{
// //   if (name!=="Rajesh"){
// //     setName(name.toLocaleUpperCase())
// //   }
// // }



//   return (
//     <>
//     <h2>This side {name} </h2>
//       <h1>count:{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increament</button>
//       <button onClick={() => setCount(count - 1)}>Decreament</button>
//       <button onClick={() => setCount(INITIAL_COUNT)}>Reset</button>
//       <button onClick={()=> setName(name+" developer")}>ChangeName</button>
//       <button onClick={()=>setName(name.toLocaleUpperCase())}>CaptalizeName</button>
//       {/* <button onClick={handleName}>lowerCaseName</button> */}
//       <button onClick={()=>setName(name.toLocaleLowerCase())}>lowerCaseName</button>
//     </>
//   )
// }

//Example:-4 //increament value n number of times

import React , {useState} from "react"
import { INITIAL_COUNT } from "./Constant";
export function CountHooks (){
  const initialCount =0;
  const [count, setCount] = useState(initialCount )

  const increamentFiveTimes =()=>{
for(let i=0;i<=5;i++){
  console.log(`i...>${i}, count${count}`)
setCount=((prevCount)=> prevCount+1);


}
  }
  return(
    <>
<h1>count:{count}</h1>
<button onClick={()=>setCount(count+1)}>Increament</button>
<button onClick={increamentFiveTimes}>increamentFiveTimes</button>
<button onClick={()=>setCount(count-1)}>Decreament</button>
<button onClick={()=>setCount(INITIAL_COUNT )}>Reset</button> 
</>
  )
}
