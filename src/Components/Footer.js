import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Bhavik Balpande</h4>
      <h4>Copyright &copy; 2024 BB</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Bhavik0203" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/bhavik-balpande/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:bhavik.developer02@gmail.com' target='_blank'><GrMail/></a>
        
      </div>
    </footer>
  )
}

export default Footer