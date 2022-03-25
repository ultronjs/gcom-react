import React from 'react'
import "../index.css";
import { Link } from 'react-router-dom'
import { LoginImage } from '../assets'

function LoginForm() {
  return (
        <div className="form_container">
        <div className="form">
            <div className="form_img">
                <img src={LoginImage} alt="" />
            </div>
            <div className="form_header">
                <span className="h2 text_center">Login</span>
                <span>Doesn't have account yet? <Link to="/signup">Sign Up</Link></span>
            </div>
            <div className="input_group">
                <label className="input_label">Email Address</label>
                <input className="input_regular input_corner" type="email" placeholder="you@example.com" />
            </div>
            <div className="input_group">
                <div className="login_password_label">
                    <label className="input_label">Password</label>
                    <Link to="/resetPassword">Forgot Password</Link>
                </div>
                <input className="input_regular input_corner" type="password" placeholder="Enter 6 charater or more" />
                <i className="input_icon flex flex-jc-flex-end fas fa-eye"></i>
            </div>
            <div>
                <input type="checkbox" />
                Remember Me
            </div>
            <div>
                <button className="btn btn_primary">LOGIN</button>
            </div>

        </div>

    </div>
  )
}

export default LoginForm