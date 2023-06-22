import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import EnglishMovies from '../Pages/EnglishMovies';
import Navigation from './Navigation';
import Login from '../Pages/swetha/Login';
import SignIn from '../Pages/swetha/SignIn';
import TM from '../Pages/TM';
import Admindash from '../Pages/Admindash';
import Adminlogin from '../Pages/Adminlogin';
import Add from '../Pages/Add';
import MovieDetails from './MovieDetails';
import { useCookies } from 'react-cookie';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['myToken']);

  const handleLogin = (token) => {
    setIsLoggedIn(true);
    setCookie('myToken', token, { path: '/' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    removeCookie('myToken', { path: '/' });
  };

  useEffect(() => {
    const token = cookies.myToken;
    setIsLoggedIn(!!token);
  }, [cookies.myToken]);

  return (
    <Router>
      <Navigation isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TeluguMovies" element={<TM />} />
        <Route path="/EnglishMovies" element={<EnglishMovies />} />
        {isLoggedIn && (
          <>
            <Route path="/Add" element={<Add />} />
          </>
        )}
        
        <Route path="/LSMYS" element={<Admindash />} />
        <Route path="/Login" element={<Login onLogin={handleLogin} />} />
        <Route path="/SignUp" element={<SignIn />} />
        <Route path="/Adminlogin" element={<Adminlogin />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};

export default Header;
