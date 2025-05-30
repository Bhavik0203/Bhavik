import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

// Import images
import affluentinterio from '../images/Bhavik-08.jpg';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import greeks from '../images/Bhavik-02.jpg';
import elite24 from '../images/Bhavik_Laptop Realistic.jpg';
import CFRE from '../images/Bhavik-09.jpg';
import klas from '../images/Bhavik-03.jpg';
import build from '../images/Bhavik-05.jpg';
import roi from '../images/Bhavik-04.jpg';
import drone from '../images/Bhavik-10.jpg';

const Projects = () => {
  // Project data in a single array for easy mapping
  const projectsData = [
    {
      name: "Property Droneghjhghjgjhjh",
      photo: drone, 
      description: "Property Drone Website Built with Next.js and styled using Tailwind CSS.",
      github: "",
      website: "",
      company: "Coming Soon"
    },
    {
      name: "Property Drone Dashboard",
      photo: drone,
      description: "Property Drone Dashboard Built with Next.js and styled using Tailwind CSS. backend API is built using Node.js and Express.js.",
      github: "",
      website: "",
      company: "Coming Soon"
    },
    {
      name: "ROI Sir ",
      photo: roi,
      description: "ROI Sir Website Built with Next.js and styled using Tailwind CSS.",
      github: "",
      website: "",
      company: "Coming Soon"
    },
    {
      name: "Build Infinity",
      photo: build,
      description: "Build Infinity Website Crafted with Next.js and styled using Tailwind CSS, this responsive and modern website showcases Build Infinity’s expertise in customizable villa construction. With clean design and intuitive navigation, it highlights their services, process, and projects—offering a seamless user experience for clients dreaming of their perfect home.",
      github: "",
      website: "https://thebuildinfinity.com/",
      company: "DTG"
    },
    {
      name: "KLAS infotech",
      photo: klas,
      description: "KLAS Infotech Website Built with React.js and styled using Tailwind CSS, this sleek and modern site showcases KLAS Infotech’s mission to empower tech startups through innovation, strategic mentorship, and tailored IT solutions. Designed for clarity and impact, it highlights legacy, leadership, and services in a clean, responsive interface.",
      github: "",
      website: "https://klasinfotech.com/",
      company: "DTG"
    },
    {
      name: "CFRE",
      photo: CFRE,
      description: "A fast and powerful real estate platform with a strong search bar and multiple filters for precise property searches. It integrates multiple APIs for real-time listings, Google Maps, payments, and CRM sync. Optimized for high performance, scalability, and seamless user experience across devices.",
      github: "",
      website: "https://www.cfrerealty.com/",
      company: "DTG"
    },
    {
      name: "CFRE Dashboard",
      photo: CFRE,
      description: "KLAS Infotech Dashboard Built with React.js and styled using Tailwind CSS, Backend API is built using Node.js and Express.js.",
      github: "",
      website: "https://www.cfrerealty.com/",
      company: "DTG"
    },
    {
      name: "GreeksArray",
      photo: greeks,
      description: "A vibrant tech community platform featuring blogs, tutorials, training programs, and a job board. Built to help enthusiasts learn, grow, and land their dream tech jobs.",
      github: "https://github.com/Digitalizetheglobe/propertydrone_fe.git",
      website: "http://geeksarray-001-site7.atempurl.com/",
      company: "DTG"
    },
    {
      name: "Elite24",
      photo: elite24,
      description: "Elite24 is a real estate website that I created to provide a comprehensive platform for property buyers and sellers. The website features a modern design and user-friendly interface, making it easy for users to search and browse properties.",
      github: "",
      website: "https://elite24.co/",
      company: "DTG"
    },
    {
      name: "AffiuentInterio",
      photo: affluentinterio,
      description: "Affluent Interio is a modern interior design website that offers customized and stylish solutions. Its main goal is to help people create unique interiors for their homes or offices.",
      github: "",
      website: "https://affluentinterio.com/",
      company: "DTG"
    },
    {
      name: "RogFree",
      photo: RogfreeImage,
      description: "A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.",
      github: "https://github.com/Bhavik0203/Rogfree.git",
      website: "",
       company: "Personal"
    },
    {
      name: "Tindog",
      photo: TindogImage,
      description: "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
      github: "https://github.com/Bhavik0203/TinDog.git",
      website: "",
       company: "Personal"
      
    }
  ];

  // ProjectBox component integrated directly
  const ProjectBox = ({ project }) => {
    return ( 
      <div className='projectBox'> 
        <img className='projectPhoto' src={project.photo} alt={`${project.name} project display`} /> 
        <div>
          <br />
          <h3>{project.name} ( {project.company} ) </h3>
          <br />
          {project.description}
          <br />

          {project.github && (
            <a href={project.github} target='_blank' rel="noreferrer">
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>
          )}

          {project.website && (
            <a href={project.website} target='_blank' rel="noreferrer">
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        {projectsData.map((project, index) => (
          <ProjectBox key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;



