// // import React, { useState } from 'react'
// // import { useRef } from 'react'
// export  function UseRef() {
// //    const [refElement] =useRef()
// //   const [name, setName] =useState("Rajesh")

// //   let reset = ()=>{
// //     setName("")
// //     refElement.current.focus()
// //   }

// //   function handleInput  (){
// //     refElement.current.style.color ="red"
// //   }
//   return (

//     <div>
//         <h1>Learning useRef</h1>
//         {/* <input ref = { refElement} type="text" value={name} onChange ={(e)=>setName(e.target.value)} />
//         <button onChange={reset}>Reset</button>
//         <button onClick={handleInput}>ChangeColor</button> */}

//     </div>
//   )
// }


import React, {useState, useEffect ,useRef} from 'react'

export  function UseRef() {
    const [name, setName]= useState("Rajesh Saini")
    const [count, setCount]= useState(0)
    useEffect (()=>{
        setCount((prev)=>prev+1)
    },[name]);

    const inputRef = useRef();
    const [fontColor, setColor] = useState("red");
  
    const style = {
      color: fontColor,
      fontWeight: "bold",
    };


  return (
    <div>
        <h1> using useRef</h1>
         <input
        ref={inputRef}
        type="text"
        value={name}
        onFocus={() => {
          inputRef.current.style.outline = 0;
          inputRef.current.style.border = "2px solid blue";
        }}
        onChange={(e) => setName(e.target.value)}
      />
       
       <button onClick={() => setColor("green")}>change color</button>
       <input  type="text" className='input' value={name} onChange = {(e)=>setName(e.target.value)} /> 
<h2> This is:- {name}</h2>
<h3>rendered {count} times</h3>

<p style={style}>
       hi this side Rajesh saini from noida i am learning full stack webDevelopment
      </p>
    </div>
  )
}














