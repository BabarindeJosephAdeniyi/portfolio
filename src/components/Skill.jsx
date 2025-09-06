import React from "react";
import "./skill.css";

const Skills = () => {
  return (
    <section className="skills-section py-5 bg-dark text-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-md-6 mb-4 mb-md-0">
            <p className="text-secondary fw-bold">SKILLS</p>
            <h2 className="mb-3">
              Technical <span style={{ color: "#00E0C6" }}>skills.</span>
            </h2>
            <p className="mb-3 text-justify me-5">
These are the tools and technologies I use to build responsive, interactive, and user-friendly web applications. From structuring layouts with HTML, styling with CSS, and bringing them to life with JavaScript and React, I ensure every project is efficient, accessible, and visually engaging.</p>
          </div>

          {/* Right Side */}
          <div className="col-md-6">
            <div className="skills-layout">
              <div className="skill-badge circle">HTML5</div>
              <div className="skill-badge rectangle">JAVASCRIPT</div>
              <div className="skill-badge circle">CSS3</div>
              <div className="skill-badge pill">REACT</div>
              <div className="skill-badge rectangle">TAILWIND</div>
              <div className="skill-badge rectangle">UI DESIGN</div>
              <div className="skill-badge pill">TYPESCRIPT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
