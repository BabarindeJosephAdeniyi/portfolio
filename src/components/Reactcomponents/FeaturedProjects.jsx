import React from "react";
import "../css/featuredprojects.css";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 0,
      dataAos: "fade-up",
      image: "myproject.png",
      alternate: "project-image",
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio built with React and Bootstrap.",
      buttontxt: "View Project",
    },

    {
      id: 1,
      dataAos: "zoom-in",
      image: "myproject.png",
      alternate: "project-image",
      title: "E-commerce App",
      description:
        "An interactive shopping site with cart functionality and API integration.",
      buttontxt: "View Project",
    },

    {
      id: 2,
      dataAos: "zoom-in-left",
      image: "myproject.png",
      alternate: "project-image",
      title: "Blog Platform",
      description:
        "A blog platform with CRUD features, built using React and Firebase.",
      buttontxt: "View Project",
    },

    {
      id: 3,
      dataAos: "zoom-in-right",
      image: "myproject.png",
      alternate: "project-image",
      title: "Blog Platform",
      description:
        "A blog platform with CRUD features, built using React and Firebase.",
      buttontxt: "View Project",
    },

    {
      id: 4,
      dataAos: "zoom-out",
      image: "myproject.png",
      alternate: "project-image",
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio built with React and Bootstrap.",
      buttontxt: "View Project",
    },

    {
      id: 5,
      dataAos: "zoom-out-down",
      image: "myproject.png",
      alternate: "project-image",
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio built with React and Bootstrap.",
      buttontxt: "View Project",
    },
  ];
  return (
    <section className="projects-section py-5 bg-dark text-white" id="projects">
      <div className="text-center mb-5">
        <p className="mb-1 text-secondaryy fw-bold">PROJECTS</p>
        <h2 className="fs-2">
          Featured <span style={{ color: "#00E0C6" }}>Projects</span>
        </h2>
        <hr
          className="mx-auto"
          style={{ width: "60px", border: "2px solid #00E0C6" }}
        />


      </div>

      <div className="container">
        <div className="row g-4">
          {projects.map((item) => {
            return (
              <div className="col-md-4">
                <div
                  className="project-card p-3 rounded-3 shadow-sm h-100"
                  data-aos={item.dataAos}
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.alternate}
                    className="img-fluid rounded-3 mb-3"
                  />
                  <h5>{item.title}</h5>
                  <p className="text-secondary">{item.description}</p>
                  <a href="#" className="btn btn-sm btn-outline-info">
                    {item.buttontxt}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
