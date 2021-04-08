import React, { useState, useContext } from "react";
import { useQuery, useMutation } from "react-query";

import { Sidebar } from "../components/header/Sidebar";
import { UserContext } from "../context/userContext";

import { API, setAuthToken } from "../config/api";

export const Profile = () => {
  const [state, dispatch] = useContext(UserContext);

  console.log(state.user);

  const [form, setForm] = useState({
    fullName: "",
    email: state.user.email,
  });

  const { email, fullName } = form;

  const editUser = useMutation(async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      fullName: fullName,
      email,
    });

    await API.patch("/profile", body, config);
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    editUser.mutate();

    alert("Your changes have been saved");

    setForm({
      email: state.user.email,
      fullName: "",
    });
  };

  return (
    <div>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className=" width-100 bg-e5">
          <div
            style={{ backgroundColor: "white", height: "60px" }}
            className="d-flex align-items-center pl-3"
          >
            <h4 style={{ fontSize: "22px", margin: "0px" }}>Profile</h4>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-column form-group mr-5 ml-5 mt-5">
                <label>
                  <h5>Display Name</h5>
                </label>
                <input
                  placeholder={state.user.fullName}
                  className="form-control-link"
                  value={fullName}
                  name="fullName"
                  type="text"
                  onChange={handleChange}
                  style={{ height: "40px", borderRadius: "50px" }}
                />
              </div>
              <div className="d-flex flex-column form-group mr-5 ml-5 ">
                <label>
                  <h5>Email</h5>
                </label>
                <input
                  className="form-control-link"
                  value={email}
                  name="email"
                  type="text"
                  onChange={handleChange}
                  style={{ height: "40px", borderRadius: "50px" }}
                  disabled
                />
              </div>
              <div className="d-flex justify-content-end mr-5">
                <button className="btn btn-lg publish-link" type="submit">
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
