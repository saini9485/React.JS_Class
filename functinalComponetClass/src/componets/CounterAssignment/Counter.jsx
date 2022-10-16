import React from 'react'
import { useState, useEffect } from 'react'

export  function Counter() {
  useEffect(() => {
    
  });
  const [count, setCount] = useState(0)
  return (
    <div>
     <h1>CounterAssignment</h1> 
     <h1>Count {count}</h1>
     <div className='btn' >
     <button onClick={()=>setCount(count+1)}>Increament</button>
     </div>
      </div>
  )
}
