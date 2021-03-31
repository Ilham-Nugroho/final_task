import React, { useState, useContext } from "react";

export const LoginModal = (props) => {
  const { clickLogin } = props;
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;
  return (
    <div
      className="text-center"
      //  onHide={handleClose2}
    >
      <div className="form-signin">
        <form
        //  onSubmit={handleSubmit}
        >
          <h1 className="login-h1">Login</h1>

          <input
            // onChange={handleChange}
            // name="email"
            // value={email}
            type="email"
            className="form-control login-input"
            placeholder="Email Address"
            autofocus
          />
          <input
            // onChange={handleChange}
            // value={password}
            name="password"
            type="password"
            className="form-control login-input"
            placeholder="Password"
          />

          <button
            className=" btn btn-lg login-btn mt-4"
            type="submit"
            onClick={(event) => clickLogin(event)}
          >
            Login
          </button>
          <div className="mt-3">
            <label>
              Don't have an account? Click
              <span
                style={{ cursor: "pointer", color: "blue" }}
                variant="primary"
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
