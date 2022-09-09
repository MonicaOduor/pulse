import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./images/logo.svg";
import { Link } from "react-router-dom";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="mt-3">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            <img src={logo} alt="pulse logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " className="navbar-toggle">
          <img
            src="https://img.icons8.com/material-rounded/20/000000/menu.png"
            alt="menu-icon"
            className="rounded-0  border-0"
          />
         </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-sm-none d-md-none d-lg-block"></Nav>
          <Nav>
            <Link to="/" className="navlink mr-lg-4">
              <strong>Home</strong>
            </Link>
            <Link to="/features" className="navlink mr-lg-4">
              <strong>Features</strong>
            </Link>
            <Link to="/stories" className="navlink mr-lg-4">
              <strong>Customer Stories</strong>
            </Link>
            <Link to="/pricing" className="navlink mr-lg-4">
              <strong>Pricing</strong>
            </Link>
            <Link to="/blog" className="navlink mr-lg-4">
              <strong>Blog</strong>
            </Link>
            <Link to="/signup" className="navlink">
              <button className="btn btn-outline-success rounded-0 mr-lg-4 signup_btn">
                Sign Up
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
