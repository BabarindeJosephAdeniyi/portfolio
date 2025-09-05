import React from "react";
import "./projects.css";
import "./featuredprojects.css"

const FeaturedProjects = () => {
  return (
    <section className="projects-section py-5 bg-dark text-white">
      <div className="text-center mb-5">
        <p className="mb-1 text-secondary fw-bold">PROJECTS</p>
        <h2 className="fs-2">Featured <span style={{ color: "#00E0C6" }}>Projects</span></h2>
        <hr className="mx-auto" style={{ width: "60px", border: "2px solid #00E0C6" }} />
      </div>

      <div className="container">
        <div className="row g-4">
          {/* Project 1 */}
          <div className="col-md-4">
            <div className="project-card p-3 rounded-3 shadow-sm h-100">
              <img
                src="myproject.png"
                alt="Project 1"
                className="img-fluid rounded-3 mb-3"
              />
              <h5>Portfolio Website</h5>
              <p className="text-secondary">
                A responsive personal portfolio built with React and Bootstrap.
              </p>
              <a href="#" className="btn btn-sm btn-outline-info">View Project</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4">
            <div className="project-card p-3 rounded-3 shadow-sm h-100">
              <img
                src="myproject.png"
                alt="Project 2"
                className="img-fluid rounded-3 mb-3"
              />
              <h5>E-commerce App</h5>
              <p className="text-secondary">
                An interactive shopping site with cart functionality and API integration.
              </p>
              <a href="#" className="btn btn-sm btn-outline-info">View Project</a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4">
            <div className="project-card p-3 rounded-3 shadow-sm h-100">
              <img
                src="myproject.png"
                alt="Project 3"
                className="img-fluid rounded-3 mb-3"
              />
              <h5>Blog Platform</h5>
              <p className="text-secondary">
                A blog platform with CRUD features, built using React and Firebase.
              </p>
              <a href="#" className="btn btn-sm btn-outline-info">View Project</a>
            </div>
          </div>

                    <div className="col-md-4">
            <div className="project-card p-3 rounded-3 shadow-sm h-100">
              <img
                src="myproject.png"
                alt="Project 3"
                className="img-fluid rounded-3 mb-3"
              />
              <h5>Blog Platform</h5>
              <p className="text-secondary">
                A blog platform with CRUD features, built using React and Firebase.
              </p>
              <a href="#" className="btn btn-sm btn-outline-info">View Project</a>
            </div>
          </div>

                    <div className="col-md-4">
            <div className="project-card p-3 rounded-3 shadow-sm h-100">
              <img
                src="myproject.png"
                alt="Project 3"
                className="img-fluid rounded-3 mb-3"
              />
              <h5>Blog Platform</h5>
              <p className="text-secondary">
                A blog platform with CRUD features, built using React and Firebase.
              </p>
              <a href="#" className="btn btn-sm btn-outline-info">View Project</a>
            </div>
          </div>

                    <div className="col-md-4">
            <div className="project-card p-3 rounded-3 shadow-sm h-100">
              <img
                src="myproject.png"
                alt="Project 3"
                className="img-fluid rounded-3 mb-3"
              />
              <h5>Blog Platform</h5>
              <p className="text-secondary">
                A blog platform with CRUD features, built using React and Firebase.
              </p>
              <a href="#" className="btn btn-sm btn-outline-info">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
