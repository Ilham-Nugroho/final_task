import React, { useState, useContext } from "react";
import { useQuery, useMutation } from "react-query";

import { UserContext } from "../../context/userContext";
import { useHistory, Link } from "react-router-dom";
import { API, setAuthToken } from "../../config/api";

export const LoginModal = (props) => {
  const { clickLogin, openRegisterCloseLogin } = props;

  const [show, setShow] = useState(false);

  const router = useHistory();
  const [state, dispatch] = useContext(UserContext);

  const [form, setForm] = useState({
    email: "naruto@gmail.com",
    password: "naruto123",
  });
  const { email, password } = form;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const {
  //   data: userData,
  //   error: usarError,
  //   loading: userLoading,
  //   refetch: userRefetch,
  // } = useQuery(["userLoginCache", state.user.id], async () => {
  //   return API.get(`/user/${userState.user.id}`);
  // });

  const loginUser = useMutation(async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      email,
      password,
    });

    const response = await API.post("/login", body, config);

    // console.log(response.error);

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: response.data.data.user,
    });

    setAuthToken(response.data.data.user.token);
    router.push("/");
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    loginUser.mutate();

    clickLogin(event);
  };

  return (
    <div
      className="text-center"
      //  onHide={handleClose2}
    >
      <div className="form-signin">
        <form onSubmit={onSubmit}>
          <h1 className="login-h1">Login</h1>

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

          <button
            className=" btn btn-lg login-btn mt-4"
            type="submit"
            onClick={clickLogin}
          >
            Login
          </button>
          <div className="mt-3">
            <label>
              Don't have an account? Click
              <span
                style={{ cursor: "pointer", color: "blue" }}
                variant="primary"
                onClick={openRegisterCloseLogin}
              >
                {" "}
                Here
              </span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};
