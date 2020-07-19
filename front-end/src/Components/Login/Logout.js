import React from "react";

const Logout = ({ handleLogout }) => {
  return (
    <div className="login-container">
      <div className="login-image">
        <div>
          <span>Welcome, Back!</span>
        </div>
      </div>

      <div className="login-form">
        <form className="login">
          <span className="login-header">Member is Logged In</span>
          <button type="button" className="btn-login" onClick={handleLogout}>
            Log out
          </button>
        </form>
      </div>
    </div>
  );
};

export default Logout;
