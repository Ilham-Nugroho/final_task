import React, { useState, useContext } from "react";
import { Navbar, Nav, Modal } from "react-bootstrap";

import { UserContext } from "../../context/userContext";

import { LoginModal } from "./LoginModal";
import { RegisterModal } from "./RegisterModal";
import { NavIn } from "./NavIn";

export const Header = () => {
  const [state, dispatch] = useContext(UserContext);
  const [show, setShow] = useState(false); //login
  const [show2, setShow2] = useState(false); //register

  const handleClose = () => {
    setShow(false);
  };

  const handleClose2 = () => {
    setShow2(false);
  };

  const clickLogin = (event) => {
    event.preventDefault();

    dispatch({
      type: "LOGIN_SUCCESS",
    });

    setShow(false);
  };

  const clickLogOut = (event) => {
    event.preventDefault();
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <div>
      {state.isLogin ? (
        <NavIn clickLogOut={clickLogOut} />
      ) : (
        <Navbar id="nav" expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="/" className="text-light" id="brand">
            <img
              src="./logo192.png"
              style={{ width: "50px", height: "50px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ">
              <Nav.Link className="text-dark">
                <button
                  className="btn btn-md nav-login-btn"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  Log In
                </button>
              </Nav.Link>
              <Nav.Link className="text-dark">
                <button
                  className="btn btn-md nav-login-btn"
                  onClick={() => {
                    setShow2(true);
                  }}
                >
                  Register
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
      <Modal show={show} onHide={handleClose} size="md">
        <Modal.Body>
          <LoginModal clickLogin={clickLogin} />
        </Modal.Body>
      </Modal>
      <Modal show={show2} onHide={handleClose2} size="md">
        <Modal.Body>
          <RegisterModal />
        </Modal.Body>
      </Modal>
    </div>
  );
};
