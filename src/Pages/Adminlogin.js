import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Adminlogin() {
    const navigate = useNavigate();
    const [login, setlogin] = useState({ username: '', password: '' });
    const changeHandler = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://3.26.113.137:5000/api/auth/adminlogin', login).then(res => { navigate('/LSMYS') }).catch(err => alert(err.response.data));
    }
    return (
        
        <div className='login'>
            <div className='container'>
            <h2 className="loghead">Sign-In</h2>
            <form onSubmit={submitHandler} className="loginform">
                <label htmlFor="email">Username: <br />
                    <input type="text" name='username' onChange={changeHandler} required autoComplete='off' style={{width:'250px'}} />
                </label>
                <label htmlFor="password">Password: <br />
                    <input type="password" name='password' onChange={changeHandler} required style={{width:'250px'}} />
                </label>
                <button className="loginButton" >Login</button>
            </form>
            <div className="createanact">New coustomer? <Link to='/SignUp'>Sign-up</Link> </div>
        </div>
        </div>
    )
}