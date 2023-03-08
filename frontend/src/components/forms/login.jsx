import React from 'react';
import { Link } from 'react-router-dom';
import { register_path } from 'constants/appUrls';

export default function LoginForm() {
  return (
    <div className="login-element">
      <form>
        <div>
          <label>Email/Mobile*</label>
          <input type="text" placeholder="Enter your email/mobile..." name="username" />
        </div>
        <div>
          <label>Password*</label>
          <input type="password" placeholder="Enter your Password" name="password" />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
      <div className="form-related-actions">
        <p>Don't have an account? <Link to={register_path}>Sing Up</Link></p>
        <p><Link to={register_path}>Forgot Password?</Link></p>
      </div>
    </div>
  )
}
