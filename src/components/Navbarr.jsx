import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiShoppingBag } from "react-icons/fi";
import Offcanvas from 'react-bootstrap/Offcanvas';
import  './navbar.css'

function Navbarr() {
  return (
    <Navbar expand="lg" className="sticky-top navbarbg">
      <Container>
        <Navbar.Brand className='logo' href="#">Joscoder<span style={{ color: "#00E0C6" }}>.</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />

        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
           <Nav className="justify-content-end flex-grow-1 pe-3">
  <Nav.Link className='nav-link' href="#home">Home</Nav.Link>
  <Nav.Link className='nav-link' href="#projects">Featured Projects</Nav.Link>
  <Nav.Link className='nav-link' href="#contact">Contact Me</Nav.Link>
</Nav>


            <Form>
              <Button className='btn' variant="outline-success">View Resume <span><FiShoppingBag /></span> </Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
