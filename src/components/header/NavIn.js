import React from "react";
import { Navbar, Nav, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavIn = (props) => {
  const { clickLogOut } = props;
  return (
    <div>
      <Navbar id="nav" expand="lg" variant="light" bg="light">
        <Navbar.Brand href="/" className="text-light" id="brand">
          <img src="./logo192.png" style={{ width: "50px", height: "50px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link className="text-dark" as={Link} to="/profile">
              <button
                className="btn btn-md nav-btn d-flex align-items-center justify-content-around"
                style={{ backgroundColor: "transparent" }}
              >
                <img
                  src="./img/profilelogo.png"
                  style={{ width: "25px", height: "25px" }}
                  className="mr-2"
                />
                Profile
              </button>
            </Nav.Link>
            <Nav.Link as={Link} to="/template">
              <button
                className="btn btn-md nav-btn d-flex align-items-center justify-content-around"
                style={{ backgroundColor: "transparent" }}
              >
                <img
                  src="./img/addproductlogo.png"
                  style={{ width: "25px", height: "25px" }}
                  className="mr-2"
                />
                Template
              </button>
            </Nav.Link>
            <Nav.Link as={Link} to="/my-link">
              <button
                className="btn btn-md nav-btn d-flex align-items-center justify-content-center"
                style={{ backgroundColor: "transparent", width: "120px" }}
              >
                <img
                  src="./img/files.png"
                  style={{ width: "15px", height: "25px" }}
                  className="mr-2"
                />
                My Link
              </button>
            </Nav.Link>
            <Nav.Link className="text-dark">
              <button
                className="btn btn-md nav-btn"
                onClick={(event) => clickLogOut(event)}
                style={{ backgroundColor: "transparent" }}
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
