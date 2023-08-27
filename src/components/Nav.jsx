import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function MyNav() {
  return (
    <Navbar expand="lg" className="mainMenu" variant="dark">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="myName">
            Vlada Cabán
          </NavLink>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav id="navigation">
            <NavLink to="/" className="menu">
              About Me
            </NavLink>
            <NavLink to="/portfolio" className="menu">
              Portfolio
            </NavLink>
            <NavLink to="/resume" className="menu">
              Resume
            </NavLink>
            <NavLink to="/contact" className="menu">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
