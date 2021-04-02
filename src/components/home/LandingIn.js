import React from "react";
import { Sidebar } from "../header/Sidebar";
import { Header } from "../header/Header";

export const LandingIn = () => {
  return (
    <div>
      {/* <Sidebar /> */}
      <Header />
      <div style={{ width: "100%" }}>
        <div className="home-header">
          <div className="header-title">
            <div className="">
              <div>
                <h1 style={{ fontSize: "55px", fontWeight: "800" }}>
                  The Only Link You'll Ever Need
                </h1>
              </div>

              <div className="mt-4">
                <h5>
                  Add link for your Social Bio and optimize your social media
                  traffic.
                </h5>
                <h5 className="mt-3">Safe, fast, and easy to use</h5>
              </div>
              {/* {isLogin == false && 
            <button onClick={}>
              Get Started For Free
            </button>
            } */}
            </div>
            <div className="header-pizza">
              <img
                src="/img/desktop2.svg"
                style={{ width: "450px", height: "400px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
