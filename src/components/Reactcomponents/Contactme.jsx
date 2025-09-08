import React, { useRef, useState } from "react";
import "../css/contact.css"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import emailjs from "emailjs-com";
import Button from "react-bootstrap/esm/Button";
import { TbMessage } from "react-icons/tb";

const Contactme = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("✅ Message Sent Successfully!");
        },
        (error) => {
          setLoading(false);
          console.error("Emailjs error:", error);
          alert("❌ Error sending message, try again.");
        }
      );
  };

  return (
    <section className="contact-section py-5 bg-dark text-white" id="contact">
      <div className="py-5" style={{ backgroundColor: "#1c1c1c" }}>
        <div className="container text-center py-5">
          <small className=" text-secondary fw-bold"> GET IN TOUCH</small>
          <p className="fs-2">
            Contact <span style={{ color: "#00E0C6" }}>me.</span>
          </p>
          <p className="fs-5 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
            I am currently open to full-time, contract or part-time
            opportunities in Front End Development
          </p>
        </div>

        <div className="container pb-5">
          <div
            className="row g-4 p-4 p-md-5 rounded-3 bg-dark"
            style={{ paddingBottom: "100px" }}
          >
            <div className="col-md-5">
              <h5>Have an awesome project idea?</h5>
              <h4 style={{ color: "#00E0C6" }}>Let’s Discuss.</h4>

              <div className="mt-4">
                <p className="d-flex align-items-center mb-3">
                  <FaPhoneAlt className="me-2 border fa-bounce rounded-circle p-2 fs-2 bg-light text-dark" />{" "}
                  <span style={{ color: "#00E0C6" }}>+234 706 771 8920 </span>
                </p>
                <p className="d-flex align-items-center mb-3">
                  <MdEmail className="fa- me-2 border rounded-circle p-2 fs-2 bg-light text-dark" />{" "}
                  <span style={{ color: "#00E0C6" }}>
                    jadeniyi0403@gmail.com
                  </span>
                </p>
                <p className="d-flex  align-items-center mb-3">
                  <MdLocationOn className="fa-fade me-2 border rounded-circle p-2 fs-2 bg-light text-dark" />{" "}
                  <span>Oyo, Nigeria.</span>
                </p>
              </div>
            </div>

            <div className="col-md-7">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  className="form-control rounded mb-3 bg-dark text-light"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="form-control text-light mb-3 bg-dark"
                  required
                />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message"
                  className="form-control bg-dark text-light mb-3"
                  required
                ></textarea>
                <Button
                  type="submit"
                  className="d-flex align-items-center gap-2 btn btn-success "
                  variant="outline-success"
                  disabled={loading}
                >
                     {loading ? "Sending..." : "Send Message"}
                  <span>
                    
                    <TbMessage />
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactme;
