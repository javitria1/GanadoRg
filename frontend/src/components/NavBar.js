import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav, NavDropdown } from 'react-bootstrap'
const NavBar = () =>{
    return(
        <Navbar bg= "secondary" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Ganaderia ReGenerativa</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse 
            id="basic-navbar-nav"
            className = "justify-content-end">
            <Nav >
                <Nav.Link href="#home">Home</Nav.Link>
                
                <NavDropdown title="Fincas" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Grupo de Semoviente</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Lotes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Ubicación</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Novedades" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Vacunación</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Castración</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Inseminación</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Buscar</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">Salir</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

    )
};

export default NavBar;