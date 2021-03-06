import React from "react";
import { Link } from "react-router-dom";

import "./login-nav.scss";

const LoginNav = () => {
  return (
    <div className="login-nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
};
LoginNav.defaultProps = {
  page: "Login"
};

export default LoginNav;
