import React, { useState } from 'react'
import "./navbar.css";
import {Link} from 'react-scroll';
export default function Navbar() {
  const[isMenuOpen, setMenuOpen]=useState(false);

  const toggleMenu =()=>{
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='Navbar-container'>
        <div className='logo'>MD SOHIL</div>
        <div className={`navbar-links ${isMenuOpen ? 'active':''}`} >
        <Link to="home" smooth={true} onClick={()=> setMenuOpen(false)} >HOME</Link>
        <Link to="about" smooth={true} onClick={()=> setMenuOpen(false)}>ABOUT</Link>
        <Link to="project" smooth={true} onClick={()=> setMenuOpen(false)}>PROJECTS</Link>
        <Link to="services" smooth={true} onClick={()=> setMenuOpen(false)}>SERVICES</Link>
        <Link to="certificates" smooth={true} onClick={()=> setMenuOpen(false)}>CERTIFICATES</Link>
        <Link to="contact" smooth={true} onClick={()=> setMenuOpen(false)}>CONTACT</Link>
        </div> 
        <div className={`menu-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span className='menu-icon'></span>

        </div>
    </nav>
  )
}
