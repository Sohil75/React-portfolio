import React from 'react'
import "./footer.css";
import { MdEngineering } from "react-icons/md";
export default function Footer() {
   
  return (
    <section className="footer-section">
        <div className="footer-area">
            <div className='logo-text'>©  {new Date().getFullYear()} Md Sohil. <span> <MdEngineering /></span> </div>
        </div>
    </section>
  )
}
