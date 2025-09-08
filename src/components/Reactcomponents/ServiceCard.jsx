import React from "react";
import { SiCodecrafters } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import "../css/service.css";

const ServiceCard = () => {
  const iconStyle = {
    fontSize: "40px",
    padding: "20px 0",
    fontWeight: "bold",
  };

  const services = [
    {
      id: 0,
      icon: <SiCodecrafters />,
      title: "Web Development",
      description:
        "I use my knowledge of HTML5, CSS3, JavaScript, Bootstrap to build digital solutions for users.",
      aos: "zoom-in",
    },
    {
      id: 1,
      icon: <FaReact />,
      title: "Frontend Developer",
      description:
        "Crafting interactive, fast, and user-friendly interfaces with a strong focus on performance and accessibility.",
      aos: "fade-up",
    },
    {
      id: 2,
      icon: <MdDevices />,
      title: "Responsive Design",
      description:
        "Making sure your websites look and work great across desktops, tablets, and mobile devices.",
      aos: "zoom-out",
    },
  ];

  return (
    <section className="services-section py-5 bg-dark text-white">
      <div className="text-center pb-4">
        <p className="mb-1 text-secondary fw-bold">SERVICES</p>
        <p className="fs-2">
          What <span style={{ color: "#00E0C6" }}>I do.</span>
        </p>
      </div>

      <div className="container">
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-4" data-aos={service.aos} key={service.id}>
              <div className="p-4 rounded-3 shadow-sm h-100 pb-5 service-card">
                <div style={iconStyle}>{service.icon}</div>
                <h4>{service.title}</h4>
                <hr style={{ border: "1px solid #eefdfcff", width: "40%" }} />
                <small style={{ textAlign: "justify" }}>
                  {service.description}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
