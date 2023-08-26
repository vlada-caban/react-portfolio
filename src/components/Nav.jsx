import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function MyNav() {
  return (
    <Navbar expand="lg" className="mainMenu">
      <Container>
        <Navbar.Brand className="myName" href="/">Vlada Cabán</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Link to="/" className="menu">
              About Me
            </Link>
            <Link to="/portfolio" className="menu">
              Portfolio
            </Link>
            <Link to="/resume" className="menu">
              Resume
            </Link>
            <Link to="/contact" className="menu">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
