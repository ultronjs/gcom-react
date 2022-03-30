import React from 'react'
import "../index.css";
import { Link } from 'react-router-dom'

function SignUpForm() {
  return (
    <div className="form_container">
      <div className="form sign_up">
        <div className="form_img">
          <img src="/assets/login_logo.png" alt="" />
        </div>
        <div className="form_header">
          <span className="h2 text_center">Sign Up</span>
          <span>
            Already have a account ?<Link to="/signin">Log In</Link>
          </span>
        </div>
        <div className="input_group">
          <label className="input_label">Full Name</label>
          <input
            className="input_regular input_corner"
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className="input_group">
          <label className="input_label">Email Address</label>
          <input
            className="input_regular input_corner"
            type="email"
            placeholder="you@example.com"
          />
        </div>
        <div className="input_group">
          <label className="input_label">Password</label>
          <input
            className="input_regular input_corner"
            type="password"
            placeholder="Enter 6 charater or more"
          />
          <i className="input_icon fas fa-eye"></i>
        </div>
        <div className="input_group">
          <label className="input_label">Confirm Password</label>
          <input
            className="input_regular input_corner"
            type="password"
            placeholder="Enter same as password"
          />
          <i className="input_icon fas fa-eye-slash"></i>
        </div>
        <div className>
          <button className="btn btn_primary">CREATE ACCOUNT</button>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm