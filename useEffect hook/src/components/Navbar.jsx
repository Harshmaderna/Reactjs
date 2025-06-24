import { useEffect } from "react"
import React  from 'react'

const Navbar = ({color}) => {
    useEffect(() => {
        alert('color was changed')
    },[color])
  return (
    <div>
      i am navbar {color} hehhehe...
    </div>
  )
}

export default Navbar
