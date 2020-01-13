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
          <div className="links-list">
            <ul>
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
                <Link className="nav-links" to="/register">
                  Register
                </Link>
              </li>
              <li>
                <Link className="nav-links" to="/login">
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
