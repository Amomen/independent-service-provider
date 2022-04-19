import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Touring</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" href="">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" href="">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs" href="">
                Blogs
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/tours " href="">
                Tours page
              </Nav.Link>
              <Nav.Link>
                {user ? (
                  <button className=" logout" onClick={handleLogOut}>
                    {" "}
                    Logout
                  </button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
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
