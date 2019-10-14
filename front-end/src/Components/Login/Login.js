import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userData: [],
      isLoggedIn: false,
      message: ""
    };
  }

  handleLogin = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  SubmitLoginForm = e => {
    e.stopPropagation();
    e.preventDefault();
    const { email, password } = this.state;
    if (email === "" || password === "") {
      alert("Please enter a valid email address and password");
    } else {
      axios
        .get("/login")
        .then(res => {
          console.log("User LoggedIn!!!");
          console.log("data : ", res.data);

          this.setState({
            userData: res.data,
            isLoggedIn: true,
            email,
            password,
            message: "User Logged In"
          });
          console.log(this.state);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <React.Fragment>
        <main className="login-section">
          <form className="login">
            <span className="login-header">Login</span>
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={this.handleLogin}
              autoComplete="off"
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={this.handleLogin}
              autoComplete="off"
              required
            />
            <button
              type="submit"
              className="btn-login"
              onClick={e => this.SubmitLoginForm(e)}
            >
              Login
            </button>
            <span className="login-link">
              Don 't have an account
              <Link id="login" to="/signup">
                Signup
              </Link>
            </span>
          </form>
        </main>
      </React.Fragment>
    );
  }
}

export default Login;
