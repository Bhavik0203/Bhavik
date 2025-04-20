import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
      <div className='AboutText'>
        <h1 className='AboutTextHeading'>Journey through  <b>my experiences!</b> </h1>
        <p>
          Hi, my name is <b>Bhavik Balpande</b>, and I am from Nagpur, Maharashtra, India.
          I'm a <b>MERN stack web developer</b> with a <b>Bachelor of Engineering (BE) in Computer Science and Engineering (CSE) - 2023</b>. <br/><br/>
          
          I currently work as a <b>Web Developer</b> at <a href="https://digitalizetheglobe.com/" target='_blank'>Digitalize The Globe</a> <br></br>(July 2024 - Present).<br/><br/>
          
          I love to create original projects with beautiful designs—you can check out some of my work in the projects section.<br/><br/>
          
          I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me; links are in the footer.<br/><br/>
          
          Apart from coding, I love photography! You can check out some of my shots on 
          <a href="https://www.instagram.com/_mr_freaky_02" target='_blank'> Instagram - highligth</a>.
        </p>
      </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
  <Skills skill='Next.js' />
  <Skills skill='TypeScript' />
  <Skills skill='React' />
  <Skills skill='Node' />
  <Skills skill='Express' />
  <Skills skill='MongoDb' />
  <Skills skill='MySQL' />
  <Skills skill='Tailwind CSS' />
  <Skills skill='Git' />
  <Skills skill='Github' />
  <Skills skill='Javascript' />
  <Skills skill='C++' />
  <Skills skill='HTML' />
  <Skills skill='Postman' />
  <Skills skill='Figma' />
  <Skills skill='Npm' />
  <Skills skill='Bootstrap'/>
</div>

    </>
  )
}

export default About