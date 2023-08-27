import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function MyNav() {
  return (
    <Navbar expand="lg" className="mainMenu">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="myName">
            Vlada Cabán
          </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Link to="/" className="menu nav-link">
              About Me
            </Link>
            <Link to="/portfolio" className=" nav-link menu">
              Portfolio
            </Link>
            <Link to="/resume" className="nav-link menu">
              Resume
            </Link>
            <Link to="/contact" className="nav-link menu">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
