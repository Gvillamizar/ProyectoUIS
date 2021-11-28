import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';


const NavBar = (props) => {
    const CloseSession = () => {
      localStorage.removeItem('user')
    }
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">La Rockola.com</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">Perfil</Nav.Link>
                <Nav.Link href="/" onClick={CloseSession}>Salir</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  };
  
  export default NavBar;  