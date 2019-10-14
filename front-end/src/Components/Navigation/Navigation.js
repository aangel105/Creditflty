import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <React.Fragment>
      <nav className="navBar">
        <Link className="logoName" to="/">
          Creditfly
        </Link>
        <ul className="main-nav">
          <li>
            <Link className="nav-links" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/rewards">
              Rewards
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/signup">
              Signup
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
