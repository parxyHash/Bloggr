import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  emailAction,
  passwordAction,
  tokenAction
} from "../../actions/form-actions";
import SignupButtonBlack from "../../containers/form-buttons/signup-button-black";
import LoginNav from "../../containers/login-nav/login-nav";
import "./login.scss";

// TODO CLEAR FORM FIELDS ON PAGE CHANGE

const Login = props => (
  <>
    <LoginNav />
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form>
        <div className="group">
          <input
            className="form-input"
            type="text"
            name="email"
            onChange={e => props.dispatch(emailAction(e.target.value))}
            required
          />
          <label className="form-input-label">Email</label>
        </div>
        <div className="group">
          <input
            className="form-input"
            type="password"
            name="password"
            onChange={e => props.dispatch(passwordAction(e.target.value))}
            required
          />
          <label className="form-input-label">Password</label>
        </div>
      </form>
      <Link to="/signup" className="login-form-link">
        Don&apos;t have an account? Click here to sign up
      </Link>
      <SignupButtonBlack
        value={"Sign-in"}
        buttonClick={() => handleClick(props)}
      />
    </div>
  </>
);
const handleClick = async props => {
  try {
    const { data } = await axios.post("http://localhost:3006/auth", {
      email: props.email,
      password: props.password
    });
    props.dispatch(tokenAction(data.token));
    localStorage.setItem("email", props.email); //fix with redux persistance
    localStorage.setItem("token", JSON.stringify(data));
    props.history.push("/blog");
  } catch (err) {
    alert("Invalid email or password!");
    console.log(err);
  }
};

const mapStateToProps = state => ({
  email: state.login.email,
  password: state.login.password
});

export default connect(mapStateToProps)(Login);
