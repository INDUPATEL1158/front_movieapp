import React from 'react';
import UserRegistrationForm from './components/LoginPage/UserRegistrationForm.js';
import './components/LoginPage/UserRegistrationForm.css';
import Login from './components/LoginPage/Login.js';

import RestPassword from './components/LoginPage/RestPassword.js';
import AddData from './components/SignInPageData/AddData.js';
import AllTicket from './components/SignInPageData/AllTicket.js';

import AllMovie from './components/SignInPageData/AllMovie.js';
import AddMovieForm from './components/SignInPageData/AddMovieForm.js';
import DeleteMovie from './components/SignInPageData/DeleteMovie.js';
import User from './components/SignInPageData/User.js';
import AddTicket from './components/SignInPageData/AddTicket.js';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/UserRegistrationForm" element={<UserRegistrationForm />} />
        <Route path="/RestPassword" element={<RestPassword />} />
        <Route path="/AddData" element={<AddData />} />
        <Route path="/AllTicket" element={<AllTicket />} />
        <Route path="/AllMovie" element={<AllMovie />} />
        <Route path="/AddMovieForm" element={<AddMovieForm />} />
        <Route path="/AddData" element={<AddData />} />
        <Route path="/DeleteMovie" element={<DeleteMovie />} />
        <Route path="/User" element={<User />} />

        <Route path="/AddTicket" element={<AddTicket />} />
        
      </Routes>
    </Router>
   
    </div>
  );
}

export default App;
