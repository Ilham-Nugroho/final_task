import React, { useState, useContext } from "react";
import { Navbar, Nav, Modal } from "react-bootstrap";

import { UserContext } from "../../context/userContext";

import { LoginModal } from "./LoginModal";
import { RegisterModal } from "./RegisterModal";
import { NavIn } from "./NavIn";

export const Header = () => {
  const [state, dispatch] = useContext(UserContext);
  const [showLogin, setShowLogin] = useState(false); //login
  const [showRegister, setShowRegister] = useState(false); //register

  const closeLogin = () => {
    setShowLogin(false);
  };

  const closeRegister = () => {
    setShowRegister(false);
  };

  const clickLogin = () => {
    setShowLogin(false);
  };

  const clickRegister = () => {
    setShowRegister(false);
  };

  const openLoginCloseRegister = () => {
    setShowRegister(false);
    setShowLogin(true);
  };
  const openRegisterCloseLogin = () => {
    setShowRegister(true);
    setShowLogin(false);
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
        <div>
          <NavIn clickLogOut={clickLogOut} />
        </div>
      ) : (
        <Navbar
          id="nav"
          expand="lg"
          variant="light"
          style={{ backgroundColor: "#E5E5E5", padding: "8px 30px" }}
        >
          <Navbar.Brand href="/" className="text-light" id="brand">
            <img
              src="./img/wayslink.png"
              style={{ width: "100px", height: "20px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ">
              <Nav.Link className="text-dark">
                <button
                  className="btn btn-md nav-login-btn"
                  onClick={() => {
                    setShowLogin(true);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    color: "black",
                    fontWeight: "600",
                    fontSize: "14px",
                    borderRadius: "10px",
                  }}
                >
                  Log In
                </button>
              </Nav.Link>
              <Nav.Link className="text-dark">
                <button
                  className="btn btn-md nav-login-btn"
                  onClick={() => {
                    setShowRegister(true);
                  }}
                  style={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: "14px",
                    borderRadius: "10px",
                    backgroundColor: "#FF9F00",
                  }}
                >
                  Register
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
      <Modal show={showLogin} onHide={closeLogin} size="md">
        <Modal.Body>
          <LoginModal
            clickLogin={clickLogin}
            openRegisterCloseLogin={openRegisterCloseLogin}
          />
        </Modal.Body>
      </Modal>
      <Modal show={showRegister} onHide={closeRegister} size="md">
        <Modal.Body>
          <RegisterModal
            clickRegister={clickRegister}
            openLoginCloseRegister={openLoginCloseRegister}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};
