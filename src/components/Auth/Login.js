import React, { useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../../styles/login.css";

const Login = () => {

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState({
    email: '',
    password: ''
  })

  const handleEmailChange = (e) => {
    const email = e.target.value
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError({ ...error, email: "Please provide a valid email" })
      setUserInfo({ ...userInfo, email: "" })
    }
    else {
      setError({ ...error, email: '' })
      setUserInfo({ ...userInfo, email: e.target.value })
    }


  }

  const handlePasswordOnChange = (e) => {
    const password = e.target.value;
    if (password.length < 6) {
      setError({ ...error, password: "Password must be 6 character" })
      setUserInfo({ ...userInfo, password: "" })
    }
    else {
      setError({ ...error, password: "" })
      setUserInfo({ ...userInfo, password: e.target.value })
    }
  }


  return (
    <div className="login-container">
      <div className="login-title">
        Login
        <BiLogInCircle />
      </div>
      <form className="login-form">
        <input
          name="email"
          value={userInfo.email}
          type="email"
          placeholder="Enter Your Email"
          onChange={handleEmailChange}
          required
        />
        {
          error.email && <p className="error-message">{error.email}</p>
        }
        <input
          name="password"
          type="password"
          placeholder="password"
          required
          onChange={handlePasswordOnChange}
          value={userInfo.password}
        />

        {
          error.password && <p className="error-message">{error.password}</p>
        }
        <button>Login</button>
        <p>

        </p>
        <p>
          Don't have an account? <Link to="/signup">Sign up first</Link>
        </p>
      </form>

      <button>Google</button>
    </div>
  );
};

export default Login;
