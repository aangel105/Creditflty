import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <React.Fragment>
      <div className="nav-container">
      <div className="logo-container">
        <Link className="logoName" to="/">
          Creditfly
        </Link>
      </div>
      <nav className="main-nav">
        <ul className="links-list">
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
      </div>
    </React.Fragment>
  );
};

export default Navigation;
