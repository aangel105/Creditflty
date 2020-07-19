import React, { Component } from "react";
import axios from "axios";
import "./Login.css";

// Components
import Logout from "./Logout";
import Form from "./Form";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userData: [],
      isLoggedIn: false,
      message: "",
    };
  }

  handleLoginInputs = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitLoginForm = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(this);
    const { email, password } = this.state;
    if (email === "" || password === "") {
      alert("Please enter a valid email address and password");
    } else {
      axios
        .get("/login")
        .then((res) => {
          console.log("User LoggedIn!!!");
          console.log("data : ", res.data);

          this.setState({
            userData: res.data.data,
            isLoggedIn: true,
            email,
            password,
            message: "User Logged In",
          });
          console.log(this.state);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  handleLogout = () => {
    console.log("isUserLoggedIn:", this.state.isLoggedIn);
    this.setState(
      {
        isLoggedIn: false,
        email: "",
        password: "",
        userData: [],
        message: "User Logout",
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    const { isLoggedIn } = this.state;
    if (!isLoggedIn) {
      return (
        <Form
          handleLoginInputs={this.handleLoginInputs}
          submitLoginForm={this.submitLoginForm}
        />
      );
    }
    console.log("isUserLoggedIn", isLoggedIn);
    return <Logout handleLogout={this.handleLogout} />;
  }
}

export default Login;
