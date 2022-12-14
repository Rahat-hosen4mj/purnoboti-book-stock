import { signOut } from "firebase/auth";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <header className="header fs-5">
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="lg"
        bg="success"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="fs-3 " as={Link} to="/home">
            Kathbirali BookStore
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav fs-3">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
            {user && (
              <>
                <Nav.Link as={Link} to="/manageStock">
                  <h4 className="text-light">Manage Stock</h4>
                </Nav.Link>
                <Nav.Link as={Link} to="/addItem">
                  <h4 className="text-light">Add Item</h4>
                </Nav.Link>
                <Nav.Link as={Link} to="/myOrder">
                  <h4 className="text-light">My Item</h4>
                </Nav.Link>
               
              </>
            )}
            {user ? (
              <Nav.Link>
                 <h4  onClick={handleSignOut} className="text-light">Sign Out</h4>
              
              </Nav.Link>
              
            
            ) : (
              <Nav.Link as={Link} eventKey={2} to="/login">
                <button className="btn">Log in</button>
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
