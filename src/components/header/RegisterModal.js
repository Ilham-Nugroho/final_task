import React, { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";

import { useQuery, useMutation } from "react-query";
import { useHistory } from "react-router-dom";

import { API, setAuthToken } from "../../config/api";

export const RegisterModal = (props) => {
  const { clickRegister, openLoginCloseRegister } = props;

  const [state, dispatch] = useContext(UserContext);
  const router = useHistory();

  const [form, setForm] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const { email, password, fullName } = form;

  //-----------------------------USEQUERY--------------------------------
  const { data: userData, loading, error, refetch } = useQuery(
    "userCache",
    async () => {
      const response = await API.get("/users");

      return response.data.data.users;
    }
  );
  //-----------------------------USEMUTATION-------------------------------
  const registerUser = useMutation(async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      fullName,
      email,
      password,
    });

    const response = await API.post("/register", body, config);
    refetch();

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: response.data.data.user,
    });

    setAuthToken(response.data.data.user.token);

    router.push("/");
  });
  //--------------------------------handle---------------------------------
  const handleSubmit = (event) => {
    event.preventDefault();

    registerUser.mutate();

    refetch();
    clickRegister(event);
  }; //NEW

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="text-center">
      <div className="form-signin">
        <form onSubmit={handleSubmit}>
          <h1 className="login-h1">Register</h1>

          <input
            onChange={handleChange}
            name="email"
            value={email}
            type="email"
            className="form-control login-input mt-3"
            placeholder="Email Address"
            autofocus
          />
          <input
            onChange={handleChange}
            value={password}
            name="password"
            type="password"
            className="form-control login-input mt-3"
            placeholder="Password"
          />
          <input
            onChange={handleChange}
            value={fullName}
            name="fullName"
            type="text"
            className="form-control register-input mt-3"
            placeholder="Full Name"
          />

          <button className=" btn btn-lg login-btn mt-4" type="submit">
            Register
          </button>
          <div className="mt-3">
            <label>
              Already have an account?
              <span
                style={{ cursor: "pointer", color: "blue" }}
                variant="primary"
                onClick={openLoginCloseRegister}
              >
                {" "}
                Log in here
              </span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};
