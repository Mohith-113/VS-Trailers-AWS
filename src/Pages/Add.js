// Add.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Add() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', posterUrl: '', flexiUrl: '', description: '', videoUrl: '', language: '' });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post('http://3.26.113.137:5000/api/addmves', formData)
  .then(res => {
    console.log(res);
    alert(res.data);
    navigate('/');
  })
  .catch(err => {
    console.log(err);
    alert(err.response.data);
  });
  }

  return (
    <div className="login">
      <div className="container">
        <div className="register">
          <h2 className="regishead">Add Movie</h2>
          <form className="regisform1" onSubmit={submitHandler}>
            <label htmlFor="title">
              Title: <br />
              <input type="text" id="title" name="title" onChange={changeHandler} autoComplete="off" required style={{ width: '250px' }} />
            </label>
            <label htmlFor="posterUrl">
              Poster URL: <br />
              <input type="text" id="posterUrl" name="posterUrl" onChange={changeHandler} autoComplete="off" required style={{ width: '250px' }} />
            </label>
            <label htmlFor="flexiUrl">
              Flexi URL: <br />
              <input type="text" id="flexiUrl" name="flexiUrl" onChange={changeHandler} autoComplete="off" required style={{ width: '250px' }} />
            </label>
            <label htmlFor="description">
              Description: <br />
              <input type="text" id="description" name="description" onChange={changeHandler} autoComplete="off" required style={{ width: '250px' }} />
            </label>
            <label htmlFor="videoUrl">
              Video URL: <br />
              <input type="text" id="videoUrl" name="videoUrl" onChange={changeHandler} autoComplete="off" required style={{ width: '250px' }} />
            </label>
            Language:
              <label htmlFor="engmve">
                <input type="radio" id="engmve" name="language" value="engmve" onChange={changeHandler} checked={formData.language === 'engmve'} /> Engmve
              </label>

            <label htmlFor="telugumve">
                <input type="radio" id="telugumve" name="language" value="telugumve" onChange={changeHandler} checked={formData.language === 'telugumve'} /> Telugumve
              </label>
            <input className="loginButton1" type="submit" style={{ margin: '5px 0 0 0' }} />
          </form>
        </div>
      </div>
    </div>
  );
}
