import './App.css'
import React from 'react'
import Hero from './components/Hero'
import ServiceCard from './components/ServiceCard'
import FeaturedProjects from './components/FeaturedProjects'
import Aboutme from './components/Aboutme'
import Skills from './components/Skill'
import Contactme from './components/Contactme'
import Footer from './components/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'


function App() {


    useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,     
      easing: "ease-in-out",
    });
  }, []);
  
  return (
    <>

      <Hero/>
      <ServiceCard/>
      <FeaturedProjects/>
      <Aboutme/>
      <Skills/>
      <Contactme/>
      <Footer/>
    </>
  )
}

export default App
