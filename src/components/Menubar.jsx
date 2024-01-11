import React from 'react'
import { Link } from 'react-router-dom'

export default function Menubar() {
  return (
    <div className='menubar-container'>
      <div className='menubar-img'>
        <Link to="/"></Link>
      </div>
      <div className='menu-links'>
        <Link to="/" className="navlink">Home</Link>  
        <Link to="/about" className="navlink">About Me</Link>  
        <Link to="/cv" className="navlink">CV</Link>  
        <Link to="/portfolio" className="navlink">Portfolio</Link>  
        <button>HIRE ME</button>
      </div>
    </div>
  )
}
