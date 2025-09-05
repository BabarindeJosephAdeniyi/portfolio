import React from 'react'
import { SiCodecrafters } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import "./service.css"

const ServiceCard = () => {
  const iconStyle = {
    fontSize:"40px",
    padding:"20px 0",
    fontWeight:"bold"
  }

  return (
    <section className="services-section py-5 bg-dark text-white">
      <div className='text-center pb-4'>
        <p className="mb-1 text-secondary fw-bold">SERVICES</p>
        <p className='fs-2'>What <span style={{color:"#00E0C6"}}>I do.</span></p>
      </div>

      <div className="container">
        <div className="row g-4">

          <div className="col-md-4">
            <div className="p-4  rounded-3 shadow-sm h-100 pb-5 service-card">
              <div style={iconStyle}><SiCodecrafters /></div>
              <h4>Web Development</h4>
              <hr style={{ border: "1px solid #eefdfcff", width:"40%"}} />
              <small>
                I use my knowledge of HTML5, CSS3, JavaScript, Bootstrap to build digital solutions for users.
              </small>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4  rounded-3 shadow-sm h-100 pb-5 service-card">
              <div style={iconStyle}><FaReact /></div>
              <h4>Frontend Developer</h4>
              <hr style={{ border: "1px solid #eefdfcff", width:"40%"}} />
              <small>
                Crafting interactive, fast, and user-friendly interfaces with a strong focus on performance and accessibility.
              </small>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4  rounded-3 shadow-sm h-100 pb-5 service-card">
              <div style={iconStyle}><MdDevices /></div>
              <h4>Responsive Design</h4>
              <hr style={{ border: "1px solid #eefdfcff", width:"40%"}} />
              <small>
                Making sure your websites look and work great across desktops, tablets, and mobile devices.
              </small>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ServiceCard
