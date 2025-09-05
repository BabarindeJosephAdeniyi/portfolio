import React from "react";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Navbarr from "./Navbarr";
import "./hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  
  return (
    <>
      <section className="hero-section">
        <Navbarr />

        <div className="hero-content container text-center text-white d-flex flex-column justify-content-center align-items-center h-100">
          <h1 className="mb-4">
            Hi, I am <span style={{ color: "#00E0C6" }}>Joscoder</span>
          </h1>
          <p className="lead mb-4 px-3 px-md-5">
            I’m Joseph, 
            <span style={{ color: "#00E0C6" }}> Frontend Developer</span>{" "}
            passionate about building responsive, interactive, and user-friendly
            websites. I enjoy transforming ideas into smooth digital experiences
            that inspire and engage. Let’s create and connect!
          </p>
          <div className="d-flex gap-3 flex-wrap justify-content-center mt-5">
            <Link
              to=""
              className="d-inline-flex justify-content-center align-items-center rounded-circle bg-white text-dark"
              style={{ width: "50px", height: "50px", fontSize: "22px" }}
            >
              <FiGithub />
            </Link>

            <Link
              to=""
              className="d-inline-flex justify-content-center align-items-center rounded-circle bg-white text-dark"
              style={{ width: "50px", height: "50px", fontSize: "22px" }}
            >
              <SiGmail />
            </Link>

            <Link
              to=""
              className="d-inline-flex justify-content-center align-items-center rounded-circle bg-white text-dark"
              style={{ width: "50px", height: "50px", fontSize: "22px" }}
            >
              <FaLinkedinIn />
            </Link>

            <Link
              to=""
              className="d-inline-flex justify-content-center align-items-center rounded-circle bg-white text-dark"
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
