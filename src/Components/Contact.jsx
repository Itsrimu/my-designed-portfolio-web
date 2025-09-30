import React from 'react'
// import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";


const Contact = () => {
  return (
    
      <>
      <div className="container contact " id="contact">
        <h1>Contact Me</h1>
        <div className="contact-icon" data-aos="zoom-out" duration="1000">
          {/* <a  href="#" className="items "><FaInstagram  icons/></a> */}
          <a  href="https://github.com/Itsrimu" className="items "><FaGithub  icons/></a>
          <a  href="https://www.linkedin.com/in/khairun-nessa-nazmin-39114424b/" className="items "><FaLinkedin icons/></a>
          <a  href="mailto:nazminkhairunnessa786@gmail.com" className="items "><MdContactMail icons/></a>
        </div>
      </div>
      
      </>
    
  )
}

export default Contact