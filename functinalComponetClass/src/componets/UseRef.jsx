import React, { useState } from 'react'
import { useRef } from 'react'
export  function UseRef() {
   const [refElement] =useRef()
  const [name, setName] =useState("Rajesh")

  let reset = ()=>{
    setName("")
    refElement.current.focus()
  }

  function handleInput  (){
    refElement.current.style.color ="red"
  }
  return (

    <div>
        <h1>Learning useRef</h1>
        <input ref = { refElement} type="text" value={name} onChange ={(e)=>setName(e.target.value)} />
        <button onChange={reset}>Reset</button>
        <button onClick={handleInput}>ChangeColor</button>

    </div>
  )
}
