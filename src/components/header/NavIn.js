import React from "react";
import { Navbar, Nav, Modal } from "react-bootstrap";

export const NavIn = (props) => {
  const { clickLogOut } = props;
  return (
    <div>
      <Navbar id="nav" expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="/" className="text-light" id="brand">
          <img src="./logo192.png" style={{ width: "50px", height: "50px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link className="text-dark">
              <button
                className="btn btn-md nav-login-btn"
                style={{ backgroundColor: "white" }}
              >
                Profile
              </button>
            </Nav.Link>
            <Nav.Link className="text-dark">
              <button
                className="btn btn-md nav-login-btn"
                onClick={(event) => clickLogOut(event)}
                style={{ backgroundColor: "white" }}
              >
                Logout
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
