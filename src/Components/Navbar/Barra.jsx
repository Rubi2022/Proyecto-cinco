import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'


const Barra = () => {
  return (
    <div>
       <Navbar clasName="Navcolor" bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/Home"><img src="https://www.pngall.com/wp-content/uploads/12/Gerbera-Flower-PNG-Pic.png" alt="logo" width={150} /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home" >Home</Nav.Link>
            <Nav.Link as={Link} to="/Catalogo" >Catalógo</Nav.Link>
            <Nav.Link as={Link} to="/Contacto" >Contactanos</Nav.Link>
            <Nav.Link as={Link} to="/Inicio" >Iniciar Sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  

    <section>
      <Outlet/>
    </section>


    </div>
  )
}

export default Barra