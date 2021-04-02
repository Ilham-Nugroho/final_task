import React, { useState } from "react";
import { Navbar, Nav, Modal } from "react-bootstrap";

import { Header } from "../header/Header";
import { LoginModal } from "../header/LoginModal";

export const LandingOut = () => {
  const bg_img = "./img/backgroundlanding.png";

  const [showLogin, setShowLogin] = useState(false); //login
  const closeLogin = () => {
    setShowLogin(false);
  };

  const clickToOpenLogin = () => {
    setShowLogin(true);
  };

  return (
    <div>
      <Header />
      <div>
        <div
          style={{
            width: "100%",
            minHeight: "100vh",
            backgroundImage: `url(${bg_img})`,
          }}
        >
          <div className="header-title">
            <div className="mr-4">
              <div>
                <h1
                  style={{
                    fontSize: "55px",
                    fontWeight: "700",
                    color: "white",
                  }}
                >
                  The Only Link You'll Ever Need
                </h1>
              </div>

              <div className="" style={{ marginTop: "25px" }}>
                <h5
                  style={{
                    fontWeight: "600",
                    fontSize: "24px",
                    color: "white",
                  }}
                >
                  Add link for your Social Bio and optimize your social media
                  traffic.
                  <br />
                  <br />
                  Safe, fast, and easy to use
                </h5>
              </div>
              <div style={{ marginTop: "105px" }}>
                <button
                  className="btn btn-lg "
                  style={{ backgroundColor: "#000", borderRadius: "10px" }}
                  onClick={clickToOpenLogin}
                >
                  <h5
                    style={{
                      fontWeight: "600",
                      fontSize: "24px",
                      color: "white",
                      margin: "0px",
                      padding: "0px 0px 2px 0px",
                    }}
                  >
                    Get Started For Free
                  </h5>
                </button>
              </div>
            </div>
            <div className="">
              <img
                src="/img/pc.png"
                style={{ width: "450px", height: "350px" }}
              />
              <img
                src="/img/phone.png"
                style={{
                  width: "180px",
                  height: "280px",
                  position: "relative",
                  bottom: "250px",
                  right: "50px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
