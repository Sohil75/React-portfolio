import React, { useState } from 'react'
import "./contact.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
    const [formData,setFormData]= useState({
        name:"",
        email:"",
        message:"",
    });
    const handleChange =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const handleSubmit =(e)=>{
        e.preventDefault();
        alert("Form submitted! Check your netlify dashboard");
        setFormData({name:"",email:"",message:""});
    }
  return (
    <section className="contact-section" id="contact">
        <h1 className='contact-title'>Contact</h1>
        <p className='sub-heading'>Hey there, feel free to say hello!</p>
        <div className="contact-details">
            <form name='contact'
            method='POST'
            data-netlify ="true"
            onSubmit={handleSubmit}>
            <div className="contact-form">
                <input name="name" value={formData.name} onChange={handleChange} type='text' placeholder='Name' required>
                </input>
                <input name="email" id="email" type='email' value={formData.email} onChange={handleChange} placeholder='Email' required></input>
                <textarea name="message" id="message" cols="70" rows="10" placeholder='Message' value={formData.message} onChange={handleChange}></textarea>
                <button type="submit" className='send-btn'>Send</button>
                
            </div>
            </form>
            <div className="contact-info">
               <div className="contact-item">
                <span className="contact-icon">
                    <FaMapMarkerAlt/>
                </span>
                <div className="contact-text">
                    <h3>Ballari, Karnataka</h3>
                    <p>India</p>
                </div>
               </div>
               <div className="contact-item">
                <span className="contact-icon">
                    <CiPhone/>
                </span>
                <div className="contact-text">
                    <h4>(+91) 9008637087</h4>
                </div>
               </div>
               <div className="contact-item">
                <span className="contact-icon">
                    <MdOutlineEmail/>
                </span>
                <div className="contact-text">
                    <p>mdsohil1802@gmail.com</p>
                </div>
               </div>
               <hr className='line'/>

            </div>
        </div>
    </section>
  )
}
