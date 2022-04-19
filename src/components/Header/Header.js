import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Touring</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" href="">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs" href="">Blogs</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/tours " href="">
              Tours page
            </Nav.Link>
            <Nav.Link as={Link} to="/login " href="">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register" href="">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
};

export default Header;
