import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [loginId, setLoginId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLoginIdChange = (event) => {
    setLoginId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:8080/reset-password', null, { params: { loginId, newPassword } })
      .then((response) => {
        console.log(response.data);
        setMessage('Password reset successfully.');
      })
      .catch((error) => {
        console.error(error.response.data);
        setMessage('User not found.');
      });
  };

  return (
    <div className="resetPassword-container">
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="loginId">Login ID:</label>
          <input
            type="text"
            id="loginId"
            value={loginId}
            onChange={handleLoginIdChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={handlePasswordChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Reset Password
        </button>
      </form>
      <p className="message">{message}</p>
    </div>
  );
}

export default App;
