import React, { useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../context/userContext";

import { Navbar, Nav, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [userState, userDispatch] = useContext(UserContext);
  const history = useHistory();

  const clickLogOut = (event) => {
    event.preventDefault();
    userDispatch({
      type: "LOGOUT",
    });
  };

  return (
    <div className="sidebar d-flex flex-column justify-content-between ">
      <div className="d-flex flex-column mt-3">
        <Navbar.Brand
          // href="/"
          as={Link}
          to="/"
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src="/img/wayslink.png"
            style={{ height: "30px", width: "120px" }}
            className="d-flex justify-self-center align-self-center"
          />
        </Navbar.Brand>

        <Nav.Link
          as={Link}
          to="/template"
          style={{ margin: "0px", padding: "0px" }}
        >
          <button className="btn btn-lg d-flex  align-items-center sidebar-btn mt-3">
            <img src="/img/templatelogo2.png" className="mr-2 ml-4" />
            Template
          </button>
        </Nav.Link>

        <Nav.Link
          as={Link}
          to="/profile"
          style={{ margin: "0px", padding: "0px" }}
        >
          <button className="btn btn-lg d-flex  align-items-center sidebar-btn mt-3">
            <img src="/img/profilelogo.png" className="mr-2 ml-4" />
            Profile
          </button>
        </Nav.Link>

        <Nav.Link
          as={Link}
          to="/my-link"
          style={{ margin: "0px", padding: "0px" }}
        >
          <button className="btn btn-lg d-flex  align-items-center sidebar-btn mt-3">
            <img src="/img/broken-link.png" className="mr-2 ml-4" />
            My Link
          </button>
        </Nav.Link>
      </div>
      <div className="mb-4">
        <button
          className="btn btn-lg d-flex align-items-center sidebar-btn ml-3"
          onClick={clickLogOut}
        >
          <img src="/img/logout.png" className="mr-2" />
          Log Out
        </button>
      </div>
    </div>
  );
};
