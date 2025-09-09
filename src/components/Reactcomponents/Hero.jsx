import React from "react";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Navbarr from "./Navbarr";
import "../css/hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  
  return (
    <>
      <section className="hero-section" id="home">
        <Navbarr />

        <div className="hero-content container text-center text-white d-flex flex-column justify-content-center align-items-center h-100">
          <h1 className="mb-4">
            Hi, I am <span style={{ color: "#00E0C6" }}>Joscoder</span>
          </h1>
          <p className="lead mb-4 px-3 px-md-5 responsive-text">
            I’m Joseph, 
            <span style={{ color: "#00E0C6" }}> Frontend Developer</span>{" "}
            passionate about building responsive, interactive, and user-friendly
            websites. I enjoy transforming ideas into smooth digital experiences
            that inspire and engage. Let’s create and connect!
          </p>
          <div className="d-flex gap-3 flex-wrap justify-content-center mt-5">
            <Link
              to="https://github.com/BabarindeJosephAdeniyi"
              className="d-inline-flex fa-fade justify-content-center align-items-center rounded-circle bg-white text-dark"
              style={{ width: "50px", height: "50px", fontSize: "22px" }}
            >
              <FiGithub />
            </Link>

            <a
  href="mailto:jadeniyi0403@gmail.com"
  className="d-inline-flex justify-content-center align-items-center rounded-circle bg-white text-dark"
  style={{ width: "50px", height: "50px", fontSize: "22px" }}
>
  <SiGmail />
</a>


            

            <Link
              to="https://www.linkedin.com/in/joseph-babarinde-707a58364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="d-inline-flex justify-content-center align-items-center rounded-circle bg-white text-dark"
              style={{ width: "50px", height: "50px", fontSize: "22px" }}
            >
              <FaLinkedinIn  />
            </Link>

            <Link
              to="https://x.com/babarinde0403?t=E0QTdd7Rn8H5ql27--cyIA&s=09"
              className="fa-flip d-inline-flex justify-content-center align-items-center rounded-circle bg-white text-dark"
              style={{ width: "50px", height: "50px", fontSize: "22px" }}
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
