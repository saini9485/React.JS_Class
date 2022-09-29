import React from 'react'
import { useContext } from 'react'
import {data,data1} from "./Parent"
export  function Child3() {
    const name = useContext(data)
    const age = useContext(data1)
  return (
    <div>
        <h1>Child3</h1>
        <h1>hi my name is {name} and age {age}</h1>
        </div>
  )
}
