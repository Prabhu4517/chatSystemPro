import React from 'react';
import logo from "images/hook_up_logo.png";

import "style/auth.css";

import RegisterForm from "components/forms/register";

export default function login() {
  return (
    <div className="login-container">
      {/* <h1>HOOKS UP</h1> */}
      <img src={logo} />
      <RegisterForm />
    </div>
  )
};
