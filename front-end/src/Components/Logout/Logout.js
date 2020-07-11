import React from "react";
import './Logout.css'

const Logout = () => {
  return (
    <React.fragment>
      <div className="login-container">
        <div className="login-image">
          <div>
            <span>Welcome, Back!</span>
          </div>
        </div>

        <div className="login-form">
          <form className="login">
            <span className="login-header">Member is Logged In</span>
            <button
              type="button"
              className="btn-login"
              // onClick={this.prop.handleLogout}
            >
              Log out
            </button>
          </form>
        </div>
      </div>
    </React.fragment>
  );
};

export default Logout;
