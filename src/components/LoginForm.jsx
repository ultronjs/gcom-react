import React,{useState} from 'react'
import "../index.css";
import { Link,useNavigate } from 'react-router-dom'
import { useAuth } from '../context';
import { publicInstance } from '../utils/axios';

function LoginForm() {
  const navigate = useNavigate()
  const initialSignInState = {
    email: "",
    password: ""
  };
  const [signIn, setSignIn] = useState(initialSignInState);
  const { signInStatusDispatch } = useAuth();
  const onChangeHandler = (e) => {
    setSignIn((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  };
  const onSubmit = async () => {
      try {
        const { status, data } = await publicInstance({
          method: "post",
          url: "/auth/login",
          data: {
            ...signIn,
          },
        });
        if (status === 200) {
          localStorage.setItem("token", data.encodedToken);
          signInStatusDispatch({ type: "SET_USER", payload: data });
          navigate("/products");
        }
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div className="form_container">
      <div className="form">
        <div className="form_img">
          <img src="/assets/login_logo.png" alt="" />
        </div>
        <div className="form_header">
          <span className="h2 text_center">Login</span>
          <span>
            Doesn't have account yet? <Link to="/signup">Sign Up</Link>
          </span>
        </div>
        <div className="input_group">
          <label className="input_label">Email Address</label>
          <input
            name="email"
            onChange={onChangeHandler}
            className="input_regular input_corner"
            type="email"
            placeholder="you@example.com"
          />
        </div>
        <div className="input_group">
          <div className="login_password_label">
            <label className="input_label">Password</label>
            {/* <Link to="/resetPassword">Forgot Password</Link> */}
          </div>
          <input
            name="password"
            onChange={onChangeHandler}
            className="input_regular input_corner"
            type="password"
            placeholder="Enter 6 charater or more"
          />
          <i className="input_icon flex flex-jc-flex-end fas fa-eye"></i>
        </div>
        {/* <div>
          <input type="checkbox" />
          Remember Me
        </div> */}
        <div>
          <button onClick={onSubmit} className="btn btn_primary">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm