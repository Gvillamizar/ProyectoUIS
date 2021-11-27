import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

const NavBar = () => {
    const CloseSession = ()=>{
      localStorage.removeItem('data')
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Rockola</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">                        
                        <Nav>
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="#">Ayuda</Nav.Link>
                            <Nav.Link href="/" onClick={CloseSession}>Salir</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar