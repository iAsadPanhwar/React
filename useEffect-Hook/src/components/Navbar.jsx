import { useEffect } from "react"
import React from 'react'

const Navbar = ({color}) => {
    // Case 1: Rerun on every render
  useEffect(() => {
    alert("Hey I will run on evry render")
  })

   // Case 2: Run on only first render
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render")
  },[])

    // Case 3: Run on only when certain value is changed
  useEffect(() => {
    alert("Hey I am running because color was changed")
    setColor(color + 1)
  },[color])
  
  return (
    <div>I am navbar of {color} color.</div>
  )
}

export default Navbar