import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

class Signup extends Component {
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
      isSignup: false
    };
  }

  handleFormFields = e => {
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
        axios
          .post("/addUser", {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */* ",
              "Content-type": "application/json"
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
              message: "Already Register",
              isSignup: true
            });

            console.log(this.state);

            this.setState({
              userData: [],
              first_name: "",
              last_name: "",
              email: "",
              password_digest: "",
              confirm_password: "",
              message: "",
              isSignup: false
            });

            console.log(this.state);
          });
      } else if (password_digest !== confirm_password) {
        alert(
          `${first_name.charAt(0).toUpperCase() +
            first_name.slice(1)} your password don't match `
        );
      } else {
        this.setState({
          userData: [],
          first_name: "",
          last_name: "",
          email: "",
          password_digest: "",
          message: alert("Something wrong with email / password"),
          isSignup: false
        });
      }
    }
  };

  render() {
    const { isSignup } = this.state;
    if (isSignup) {
      console.log("Registered!!!!", isSignup);
    }
    return (
      <React.Fragment>
        <div className="signUp-container">
          {/* <h1 className= 'signup-form '>Hello world!!!</h1> */}
          <form className="signUp-form">
            <img
              className="form-logo"
              src="https://img.icons8.com/cotton/50/000000/add.png"
              alt="icon"
            />
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              onChange={this.handleFormFields}
              autoComplete="off"
              required
            />
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              onChange={this.handleFormFields}
              autoComplete="off"
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={this.handleFormFields}
              autoComplete="off"
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password_digest"
              onChange={this.handleFormFields}
              required
            />
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              onChange={this.handleFormFields}
              required
            />
            <button
              className="btn-submit"
              type="submit"
              onClick={e => this.signupForm(e)}
            >
              Sign Up
            </button>
            <span>
              Already have an account{" "}
              <Link id="link" to="/login">
                Login{" "}
              </Link>
            </span>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;
