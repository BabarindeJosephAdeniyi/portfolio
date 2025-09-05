import React from 'react'

const Aboutme = () => {
  return (
    <div>
     <section className="about-section  py-5 bg-dark text-light">
  <div className="container">
    <div className="row align-items-center">
      <div className='text-center'>
        <small>MY BIO</small>
        <p className='fw-bold mb-3'>About <span>me.</span></p>
      </div>
      
      {/* Profile Image */}
      <div className="col-md-5 text-center mb-4 mb-md-0">
        <img 
          src="mypicture.jpg" 
          alt="Profile" 
          className="img-fluid rounded-circle shadow-lg"
          style={{ width: "320px", height: "320px", objectFit: "cover" }}
        />
      </div>

      {/* About Me Content */}
      <div className="col-md-7">
        <p className=" text-light fs-6 pb-3">
          Hello! My name is <span className="fw-semibold">Joseph</span>, but most people 
          know me online as <span style={{ color: "#00E0C6" }}>Joscoder</span>. I’m a 
          passionate <strong>Frontend Developer</strong> who loves turning ideas into 
          clean, functional, and interactive websites. My journey started with curiosity 
          about how websites work, which grew into a commitment to create user-friendly 
          digital solutions.
        </p>

        <p className=" fs-6 pb-3">
          Over the past <strong>2 years</strong>, I’ve developed strong skills in 
          <strong> HTML5, CSS3, JavaScript, React.js, and Bootstrap</strong>. I specialize 
          in responsive design, ensuring that websites look great on any screen — from 
          desktops to mobile devices. I also enjoy working with APIs, animations, and 
          modern design principles to deliver engaging user experiences.
        </p>

        <p className=" fs-6 pb-3">
          Beyond coding, I’m someone who values growth, collaboration, and creativity. 
          Every project I work on is a chance to learn something new and improve my craft. 
          My ultimate goal is to build websites and applications that not only 
          <em>look great</em> but also <em>make life easier for users</em>. Let’s 
          <span style={{ color: "#00E0C6" }}> create and connect!</span>
        </p>

        <button className="btn btn-dark px-4 mt-3">
          Download CV
        </button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Aboutme
