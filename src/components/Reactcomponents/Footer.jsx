import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3" id="home">
      <div className="container">
        <div className="row text-center text-md-start align-items-start">
          <div className="col-md-3 mb-4">
            <h3 className="fw-bold logo">
              Joscoder<span style={{ color: "#00E0C6" }}>.</span>
            </h3>
          </div>

          <div className="col-md-3 mb-4">
            <p className="mb-1">Web Developer</p>
            <p className="mb-1">Frontend developer</p>
          </div>

          <div className="col-md-3 mb-4 border-md-start border-md-end ps-md-5 border-secondary">
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-decoration-none text-light">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-decoration-none text-light">
                  My projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-decoration-none text-light">
                  About me
                </a>
              </li>
              <li>
                <a href="#contact" className="text-decoration-none text-light">
                  Contact me
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-4 ps-md-5">
            <h6 className="fw-bold">Social Media Handles</h6>
            <a href="https://www.facebook.com/joseph.babarinde.33" className="social-icon me-3 fs-5">
              <FaFacebookF />
            </a>
            <a href="https://x.com/babarinde0403?t=E0QTdd7Rn8H5ql27--cyIA&s=09" className="social-icon me-3 fs-5">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/babarindejoseph04?igsh=bzN1bnRmOHB0Z3l2" className="social-icon me-3 fs-5">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/joseph-babarinde-707a58364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon fs-5">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="text-center pb-4">
          <p className="mb-0">
            Developed by me, Designed by  <a href="#" className="text-decoration-none text-info">Joseph Babarinde</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
