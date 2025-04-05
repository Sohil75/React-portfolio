import React, { useEffect } from 'react'
import "./poster.css"
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
export default function Poster() {
  
  useEffect(()=>{
    const poster = document.querySelector(".poster");
    poster.classList.add("fade-in");

  },[]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className={`poster ${inView ? "fade-in" :""}`} id='home' ref={ref}>
      <div className="poster-container">
        <div className="headerText">
            <p className='greet'>Hi, I am</p>
            <h1>
           <span>Md Sohil</span><br />a Full-Stack Developer
          </h1>
          <p className='slang'>Building scalable and efficient web applications with modern technologies.
          Passionate about creating seamless user experiences and optimizing performance</p>
          {/* <div className='github-link'>
        <a href="/">GitHub Profile</a>
        </div> */}
        <div className="social-icon">
          <ul>
          <li>
              <a href="https://github.com/Sohil75" target='_blank' rel='noopener noreferrer'><FaGithub className='icon'/></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/md-sohil/" target='_blank' rel='noopener noreferrer'><FaLinkedinIn className='icon'/></a>
            </li>
            <li>
              <a href="https://x.com/MdSohil63066236" target='_blank' rel='noopener noreferrer'><FaXTwitter className='icon'/></a>
            </li>
            <li>
              <a href="https://www.instagram.com/__sohil_18?igsh=dDNnanVmZTZscWVz" target='_blank' rel='noopener noreferrer'><FaInstagram className='icon'/></a>
            </li>
          </ul>
        </div>
        </div>
       
      </div>
    </section>
  )
}
