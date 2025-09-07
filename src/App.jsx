import './App.css'
import React from 'react'
import Hero from './components/Reactcomponents/Hero'
import ServiceCard from "./components/Reactcomponents/ServiceCard"
import FeaturedProjects from './components/Reactcomponents/FeaturedProjects'
import Aboutme from './components/Reactcomponents/Aboutme'
import Skills from './components/Reactcomponents/Skill'
import Contactme from './components/Reactcomponents/Contactme'
import Footer from './components/Reactcomponents/Footer'
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
