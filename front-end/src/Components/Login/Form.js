import React from "react";
import { Link } from "react-router-dom";

const Form = ({ handleLoginInputs, submitLoginForm }) => {
  return (
    <React.Fragment>
      <div className="login-container">
        <div className="login-image">
          <div>
            <span>Member Login</span>
          </div>
        </div>

        <div className="login-form">
          <form className="login">
            <span className="login-header">Member Login</span>
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleLoginInputs}
              autoComplete="off"
              autoFocus
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleLoginInputs}
              autoComplete="off"
              required
            />
            <button
              type="submit"
              className="btn-login"
              onClick={submitLoginForm}
            >
              Login
            </button>
            <span className="login-link">
              Don 't have an account
              <Link id="login" to="/register">
                Register
              </Link>
            </span>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
