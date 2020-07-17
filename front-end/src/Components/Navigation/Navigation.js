import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <React.Fragment>
      <div className="nav-container">
        <div className="logo-container">
          <Link className="logoName" to="/">
            Adventures
          </Link>
        </div>
        <nav className="main-nav">
          <div>
            <ul className="nav-items">
              <li>
                <Link className="nav-item" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/rewards">
                  Rewards
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/register">
                  Register
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
