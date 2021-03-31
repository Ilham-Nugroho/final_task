import React, { useState, useContext } from "react";

export const RegisterModal = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    role: "",
  });
  const { email, password, name, phone, role } = form;

  return (
    <div
      className="text-center"
      //  onHide={handleClose2}
    >
      <div className="form-signin">
        <form
        //  onSubmit={handleSubmit}
        >
          <h1 className="login-h1">Register</h1>

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
          <input
            // onChange={handleChange}
            // value={name}
            name="name"
            type="text"
            className="form-control register-input"
            placeholder="Full Name"
          />
          <input
            // onChange={handleChange}
            // value={phone}
            name="phone"
            type="text"
            className="form-control register-input"
            placeholder="Phone"
          />
          <input
            // onChange={handleChange}
            // value={role}
            name="role"
            type="text"
            className="form-control register-input"
            placeholder="Role (USER / PARTNER)"
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
