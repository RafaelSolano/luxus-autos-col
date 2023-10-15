import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css'

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">
        <span className='nav__label'>LuxusAutos</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">
            <span className='nav__label'>Home</span>
              Home</Nav.Link>
            <Nav.Link href="/cars">
              <span className='nav__label'>Carros</span>
              </Nav.Link>
           
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;