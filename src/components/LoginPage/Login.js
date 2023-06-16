import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserRegistrationForm.css';
import { Link } from 'react-router-dom';

const Login = () => {

  const [credentials, setCredentials] = useState({
    loginId: '',
    password: '',
  });

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { loginId, password } = credentials;
    if (loginId) {
      axios
        .post('http://localhost:8080/login', null, { params: { loginId, password } })
        .then((response) => {
          console.log(response.data);
          // Handle success response here
          // Redirect to the addData page
          if(loginId=='admin'){
          window.location.href = 'AddData';}
          else
          {
            window.location.href = 'User';

          }
         
        })
        .catch((error) => {
          console.error(error.response.data);
          // Handle error here
          alert('Invalid login credentials');
        });
    } else {
      // Handle the case when loginId is missing
      console.error('Login ID is required');
    }
  };

  return (
    <div className='contaoner-fluid'>
    <div className="login-container">
      <div className="welcome-message">
        <h1>Welcome to the Movie Booking App</h1>
        <p>Sign in to access your account and start booking your favorite movies!</p>
        <p>
          Don't have an account? <Link to="/UserRegistrationForm">Click here to sign up</Link>
        </p>
        <p>
          <Link to="/RestPassword">Forgot password? Reset it here</Link>
        </p>
      </div>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="loginId">Login ID:</label>
            <input
              type="text"
              id="loginId"
              name="loginId"
              value={credentials.loginId}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>

    </div>
    <footer>
            <p>&copy; {new Date().getFullYear()} Movie Booking App</p>
          </footer>
    </div>
  );
};

export default Login;
