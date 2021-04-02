import React from "react";
import { useHistory } from "react-router";
import { Sidebar } from "../components/header/Sidebar";

export const Template = () => {
  const history = useHistory();
  const handleClick = (event) => {
    event.preventDefault();

    history.push("/link");
  };

  return (
    <div className="d-flex ">
      <div>
        <Sidebar />
      </div>
      <div className="width-100 bg-e5">
        <div
          style={{ backgroundColor: "white", height: "60px" }}
          className="d-flex align-items-center pl-3"
        >
          <h4 style={{ fontSize: "22px", margin: "0px" }}>Template</h4>
        </div>
        <div className="row mt-5" style={{ margin: "0" }}>
          <div
            className="d-flex col-lg-3 col-md-6 mt-3 align-items-center justify-content-center"
            onClick={handleClick}
          >
            <img
              src="./img/template1.png"
              style={{ width: "250px", height: "350px" }}
            />
          </div>
          <div className="d-flex col-lg-3 col-md-6 mt-3 justify-content-center">
            <img
              src="./img/template2.png"
              style={{ width: "250px", height: "350px" }}
            />
          </div>
          <div className="d-flex col-lg-3 col-md-6 mt-3 justify-content-center">
            <img
              src="./img/template3.png"
              style={{ width: "250px", height: "350px" }}
            />
          </div>
          <div className="d-flex col-lg-3 col-md-6 mt-3 justify-content-center">
            <img
              src="./img/template4.png"
              style={{ width: "250px", height: "350px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
