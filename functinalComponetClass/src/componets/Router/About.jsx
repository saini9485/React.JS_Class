import React from 'react'
import{Link} from "react-router-dom"
export default function About() {
  return (
    <div><h1>About</h1>
    
    <p> <Link to="/about/1">Content1</Link></p>
    <p> <Link to="/about/2">Content2</Link></p>
    </div>
  )
}
