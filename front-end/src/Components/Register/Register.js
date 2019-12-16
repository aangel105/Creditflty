import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password_digest: "",
      confirm_password: "",
      userData: [],
      message: "",
      isRegistered: false
    };
  }

  handleFormInputFields = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  signupForm = e => {
    const {
      first_name,
      last_name,
      email,
      password_digest,
      confirm_password
    } = this.state;
    e.stopPropagation();
    e.preventDefault();
    if (
      first_name === "" ||
      last_name === "" ||
      email === "" ||
      password_digest === "" ||
      confirm_password === ""
    ) {
      alert("Need to fill out all the input fields");
    } else {
      if (password_digest === confirm_password) {
        console.log("Equal password!!!");
        axios
          .post("/addUser", {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */* ",
              "content-type": "application/json"
            },
            first_name: JSON.stringify(first_name),
            last_name: JSON.stringify(last_name),
            email: JSON.stringify(email),
            password_digest: JSON.stringify(password_digest)
          })
          .then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({
              userData: res.data,
              first_name,
              last_name,
              email,
              password_digest,
              message: "Already Registered",
              isRegistered: true
            });

            console.log(this.state);
          });
      } else if (password_digest !== confirm_password) {
        alert(
          `${first_name.charAt(0).toUpperCase() +
            first_name.slice(1)} your password don't match `
        );
      } else {
        alert("Something wrong with email / password");
        this.setState({
          userData: [],
          first_name: "",
          last_name: "",
          email: "",
          password_digest: ""
        });
      }
    }
  };

  render() {
    const { isRegistered } = this.state;
    if (!isRegistered) {
      return (
        <React.Fragment>
          <div className="register-container">
            <div className="register-form-image">
            <button
                className="btn-submit"
                type="submit"
                onClick={e => this.signupForm(e)}
              >
                Register
              </button>
              <span>
                Already have an account{" "}
                <Link id="link" to="/login">
                Login{" "}
                </Link>
              </span>
            </div>
            <form className="register-form">
              <img
                className="form-logo"
                src="https://img.icons8.com/cotton/50/000000/add.png"
                alt="icon"
              />
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                onChange={this.handleFormInputFields}
                autoComplete="off"
                autoFocus
                required
              />
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                onChange={this.handleFormInputFields}
                autoComplete="off"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={this.handleFormInputFields}
                autoComplete="off"
                required
              />
              <label>Password</label>
              <input
                type="password"
                name="password_digest"
                onChange={this.handleFormInputFields}
                required
              />
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirm_password"
                onChange={this.handleFormInputFields}
                required
              />
            </form>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="form-submitted-container">
            <h1 className="form-submitted-header">Thank you for register!!</h1>
            <Link className="form-submitted-login-link" to="/login">
              Login
            </Link>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Register;
