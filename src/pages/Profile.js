import React from "react";
import { Sidebar } from "../components/header/Sidebar";

export const Profile = () => {
  return (
    <div>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div
          // style={{ backgroundColor: "#e5e5e5" }}
          className=" width-100 bg-e5"
        >
          <div
            style={{ backgroundColor: "white", height: "60px" }}
            className="d-flex align-items-center pl-3"
          >
            <h4 style={{ fontSize: "22px", margin: "0px" }}>Profile</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
