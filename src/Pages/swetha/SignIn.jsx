import "./Login.css";
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();
  const [register, setregister] = useState({ name: '', username: '', email: '', password: '' });
  const changeHandler = (e) => {
      setregister({ ...register, [e.target.name]: e.target.value });
  }
  const submitHandler = (e) => {
      e.preventDefault();
      axios.post(`http://3.26.113.137:5000/api/auth/register`, register).then(res => { alert(res.data); navigate('/login') }).catch(err => alert(err.response.data));
  }
  return (
    <div className="login">
      
      <div className="container">
      <div className='register' >
            <div className="loginadmin"><Link to='/adminlogin' >Login as Admin</Link></div>
            <h2 className="regishead">Sign-up</h2>
            <form className="regisform1" onSubmit={submitHandler}>
                <label htmlFor="name">Name: <br />
                    <input type="text" name='name' onChange={changeHandler} autoComplete='off' required style={{width:'250px'}} />
                </label>
                <label htmlFor="name">Username: <br />
                    <input type="text" name='username' onChange={changeHandler} autoComplete='off' required style={{width:'250px'}} />
                </label>
                <label htmlFor="name">Email: <br />
                    <input type="email" name='email' onChange={changeHandler} autoComplete='off' required style={{width:'250px'}} />
                </label>
                <label htmlFor="name">Password: <br />
                    <input type="password" name='password' onChange={changeHandler} autoComplete='off' required style={{width:'250px'}} />
                </label>
                <input className='loginButton' type="submit" value="Register" style={{margin:'5px 0 0 0', height:'40px'}}/>
            </form>
            <div className="already">Already have an account? <Link to='/login'>Sign-In</Link></div>
        </div>
      </div>
    </div>
  );
}