import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ username: '', password: '' });

  const changeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://3.26.113.137:5000/api/auth/login', login)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        onLogin(); // Call onLogin function to update isLoggedIn state in Header component
        navigate('/');
      })
      .catch((err) => alert(err.response.data));
  };

  return (
    <div className="login">
      <div className="container">
        <div className="loginadmin">
          <Link to="/adminlogin">Login as Admin</Link>
        </div>
        <h2 className="loghead">Sign-In</h2>
        <form onSubmit={submitHandler} className="loginform">
          <label htmlFor="email">
            Username: <br />
            <input
              type="text"
              name="username"
              onChange={changeHandler}
              required
              autoComplete="off"
              style={{ width: '250px' }}
            />
          </label>
          <label htmlFor="password">
            Password: <br />
            <input
              type="password"
              name="password"
              onChange={changeHandler}
              required
              style={{ width: '250px' }}
            />
          </label>
          <button className="loginButton" value={Login}>
            Login
          </button>
        </form>
        <div className="createanact">
          New customer? <Link to="/SignUp">Sign-up</Link>{' '}
        </div>
      </div>
    </div>
  );
}
