import React from 'react';
import { Link } from 'react-router-dom';
import { login_path } from 'constants/appUrls';

export default function RegisterForm() {
  return (
    <div className="login-element">
      <form>
        <div>
          <label>Full Name*</label>
          <input type="text" placeholder="Enter your Name..." name="name" />
        </div>
        <div>
          <label>Email*</label>
          <input type="text" placeholder="Enter your Email" name="email" />
        </div>
        <div>
          <label>Mobile*</label>
          <input type="text" placeholder="Enter your Mobile" name="mobile" />
        </div>
        <div>
          <label>Password*</label>
          <input type="password" placeholder="Enter your Password" name="password" />
        </div>
        <div>
          <label>Confirm Password*</label>
          <input type="password" placeholder="Enter your Confirm Password" name="confirmPassword" />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
      <div className="form-related-actions">
        <p>Have an account? <Link to={login_path}>Sing Up</Link></p>
      </div>
    </div>
  )
}
