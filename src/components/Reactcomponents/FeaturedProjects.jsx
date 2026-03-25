import React from "react";
import "../css/featuredprojects.css";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 0,
      dataAos: "fade-up",
      image: "portfolio-image.png",
      alternate: "portfolio-image",
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio built with React and Bootstrap.",
      buttontxt: "View Project",
      links: "my-portfolio-joscoder-04.vercel.app"
    },

    {
      id: 1,
      dataAos: "zoom-in",
      image: "event-image.png",
      alternate: "event-image",
      title: "Event App",
      description:
        "A React app to browse events with QR codes and download options.",
      buttontxt: "View Project",
      links:"https://event-app-5.vercel.app/"
    },

    {
      id: 2,
      dataAos: "zoom-in-left",
      image: "ecommerce-image.png",
      alternate: "ecommerce-image",
      title: "E-commerce App",
      description:
        "A responsive e-commerce platform built with JavaScript .",
      buttontxt: "View Project",
      links:"https://fancy-gelato-edd0a6.netlify.app/"
    },

    {
      id: 3,
      dataAos: "zoom-in-right",
      image: "dictionary.png",
      alternate: "dictionary-image.png",
      title: "Dictionary App",
      description:
        "A React app to search and explore word definitions.",
      buttontxt: "View Project",
      links:"https://silly-pie-d956d1.netlify.app/"
    },

    {
      id: 4,
      dataAos: "zoom-out",
      image: "login.png",
      alternate: "login-image",
      title: "MERN-Auth-System",
      description:
        "A responsive authentication system built with MERN stack.",
      buttontxt: "View Project",
      links:"#"
    },

    {
      id: 5,
      dataAos: "zoom-out-down",
      image: "register.png",
      alternate: "register-image",
      title: "Register Page",
      description:
        "A responsive registration page built with React.",
      buttontxt: "View Project",
      links:"https://register-form-lac-five.vercel.app"
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
                  <a href={item.links} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-info">
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
