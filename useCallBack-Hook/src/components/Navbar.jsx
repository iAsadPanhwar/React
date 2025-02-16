import React from 'react'
import { memo, useCallback } from 'react'

const Navbar = ({adjective,getAdjective}) => {
  return (
    <div>I am a {adjective} Navbar
    <button onClick={()=>{getAdjective()}}>Change me</button>
    </div>
    
  )
}

export default memo(Navbar)