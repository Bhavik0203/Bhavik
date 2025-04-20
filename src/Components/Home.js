import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>BHAVIK BALPANDE</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
        <div className='AboutText'>
        
          <h1 className='AboutTextHeading'>Brief <b>Introduction</b></h1>
          <p>
            I am passionate about transforming ideas into impactful digital experiences.  
            As a <b>Web Developer</b>, I thrive on solving complex problems and building scalable,  
            high-performance applications. My goal is to create innovative solutions  
            that push my skills and contribute meaningfully to the tech space. <br /><br />

            My expertise includes <b>TypeScript, JavaScript, HTML, CSS, SQL, Next.js, React.js,  
            Tailwind CSS, Material-UI, WordPress, Node.js, Express.js, MySQL, and MongoDB</b>.  
            I continuously explore new technologies to enhance my development stack.<br /><br />

            Currently, I am focusing on expanding my knowledge of <b>Next.js</b>,  
            <b>Three.js</b>, and advanced <b>TypeScript</b> concepts. <br /><br />

            Also, I love <b>coffee</b> <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />   
          </p>
        </div>

       
      </div>
    </div>
  )
}

export default Home