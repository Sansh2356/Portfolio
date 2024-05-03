import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className='header'>
        <NavLink to="/" className='w-20 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
          <p className='blue-gradient_text'>Portfolio</p>
        </NavLink>
        <NavLink to="/about" className='w-20 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
          <p className='blue-gradient_text'>About</p>
        </NavLink>
        <NavLink to="/projects" className='w-20 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
          <p className='blue-gradient_text'>Projects</p>
        </NavLink>
        <NavLink to="/contact" className='w-20 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
          <p className='blue-gradient_text'>Contact</p>
        </NavLink>
    </header>
  )
}

export default Navbar
