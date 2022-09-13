import { signOut } from "firebase/auth";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase/Firebase.init";
import logo from "../../../images/logo-dark.png";

import "./Header.css";
const Header = () => {
  const [user, user1] = useAuthState(auth);
  console.log(user, user1);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav
            className="mr-auto my-2 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/inventory">
              inventory
            </Nav.Link>

            {(user || user1) && (
              <>
                <Nav.Link as={Link} to="/addProduct">
                  Add Product
                </Nav.Link>
                <Nav.Link as={Link} to="/manageProduct">
                  Manage Product
                </Nav.Link>
              </>
            )}

            {(user || user1) && (
              <Nav.Link onClick={() => signOut(auth)}>
                <small>welcome </small>
                {user?.displayName}
              </Nav.Link>
            )}
            {user || user1 ? (
              <Nav.Link onClick={() => signOut(auth)}>logout</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
