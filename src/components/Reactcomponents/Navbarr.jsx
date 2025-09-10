import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiShoppingBag } from "react-icons/fi";
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../css/navbar.css';

function Navbarr() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" variant="dark" className="sticky navbarbg">
      <Container>
        <Navbar.Brand className="logo" href="#home">
          Joscoder<span style={{ color: "#00E0C6" }}>.</span>
        </Navbar.Brand>

        {/* toggle uses custom handler */}
        <Navbar.Toggle onClick={handleShow} aria-controls="offcanvasNavbar-expand-lg" />

        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
          className="bg-dark text-white"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="nav-link text-white" href="#home" onClick={handleClose}>Home</Nav.Link>
              <Nav.Link className="nav-link text-white" href="#projects" onClick={handleClose}>Featured Projects</Nav.Link>
              <Nav.Link className="nav-link text-white" href="#contact" onClick={handleClose}>Contact Me</Nav.Link>
            </Nav>

            <Form>
              <Button variant="outline-success" className="btn">
                View Resume <FiShoppingBag />
              </Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
