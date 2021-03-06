import React from "react";

import "./signup-button-black.scss";

const SignupButtonBlack = ({ value, buttonClick }) => {
  return (
    <div className="login-button" onClick={buttonClick}>
      <div className="icons-top envelope">
        <i className="fa fa-envelope fa-2x"></i>
      </div>
      <div className="login-button-text">{value} With Email</div>
    </div>
  );
};
SignupButtonBlack.defaultProps = {
  value: "Sign-up"
};

export default SignupButtonBlack;
