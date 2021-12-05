import React from 'react'
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import imagen from "../assets/img/Baner4.jpg"


const NavBar = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  console.log('Usuario:'+user);

  var navLinks = (
    <Nav>
      <Nav.Link href="https://fb.com">Facebook</Nav.Link>
      <Nav.Link href="https://instagram.com">Instagram</Nav.Link>
    </Nav>
  );

  const CloseSession = () => {
    localStorage.removeItem('user')
  }

  if (user !== undefined && user !== null) {
    navLinks = (
      <Nav>
        <Nav.Link href="/home">
          <Image src={user.photoUrl} width="30px" height="30px" roundedCircle />
        </Nav.Link>
        <Nav.Link href="/RegistroUsuario">
          <strong>{user.name}</strong>
        </Nav.Link>
        <Nav.Link href="/home">Inicio</Nav.Link>
        <Nav.Link href="/RegistroUsuario">Perfil</Nav.Link>
        <Nav.Link href="/" onClick={CloseSession}>
          Salir
        </Nav.Link>
      </Nav>
    );
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
        <Image src={imagen} width="30px" height="30px" roundedCircle />
          <Navbar.Brand href="/">La Rockola.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            {navLinks}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;