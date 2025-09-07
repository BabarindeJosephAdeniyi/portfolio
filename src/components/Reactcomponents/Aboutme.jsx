import React from 'react'
import { FiShoppingBag } from "react-icons/fi";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../css/aboutme.css"

const Aboutme = () => {
  return (
    <div>
     <section className="about-section  py-5 text-light" id='about'>
  <div className="container">
    <div className="row align-items-center">
      <div className='text-center'>
        <small className='fw-bold text-secondary'>MY BIO</small>
        <p className='fw-bold mb-5 fs-2'>About <span style={{color:"#00E0C6"}}>me.</span></p>
      </div>
      

      <div className="col-md-5 text-center mb-4 mb-md-0" data-aos="zoom-in-up">
        <img 
          src="mypicture.jpg" 
          alt="Profile" 
          className="img-fluid rounded-circle shadow-lg smaill-img "
          style={{ width: "500px", height: "450px", objectFit: "cover" }}
        />
      </div>


      <div className="col-md-7 text-place" data-aos="zoom-in-down">
        <p className=" text-light fs-6 pb-3 about-text">
          Hello! My name is <span className="fw-semibold">Joseph</span>, but most people 
          know me online as <span style={{ color: "#00E0C6" }}>Joscoder</span>. I’m a 
          passionate <strong>Frontend Developer</strong> who loves turning ideas into 
          clean, functional, and interactive websites. My journey started with curiosity 
          about how websites work, which grew into a commitment to create user-friendly 
          digital solutions.
        </p>

        <p className=" fs-6 pb-3 about-text">
          Over the past <strong>2 years</strong>, I’ve developed strong skills in 
          <strong> HTML5, CSS3, JavaScript, React.js, and Bootstrap</strong>. I specialize 
          in responsive design, ensuring that websites look great on any screen — from 
          desktops to mobile devices. I also enjoy working with APIs, animations, and 
          modern design principles to deliver engaging user experiences.
        </p>

        <p className=" fs-6 pb-3 about-text">
          Beyond coding, I’m someone who values growth, collaboration, and creativity. 
          Every project I work on is a chance to learn something new and improve my craft. 
          My ultimate goal is to build websites and applications that not only 
          <em>look great</em> but also <em>make life easier for users</em>. Let’s 
          <span style={{ color: "#00E0C6" }}> create and connect!</span>
        </p>

       
                   <Form>
                     <Button className='btn' variant="outline-success">View Resume <span><FiShoppingBag /></span> </Button>
                   </Form>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Aboutme
