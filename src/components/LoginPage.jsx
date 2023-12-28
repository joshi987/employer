// LoginPage.jsx
// LoginPage.jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Group from '../img/Group 3.jpg'

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if the email address is provided
    if (email.includes('@')) {
      onLogin();
      history.push('/home');
    } else {
      // Handle the case where the email is not provided
      alert('Please enter a valid email address.');
      // You can also update the UI to indicate the error to the user
    }
  };

  return (
    <center>

      <div className="container">
    <img className="page-image" src={Group} alt="Page Image" />
    <br />
    <input
      className="email-input"
      type="email"
      placeholder="e-mail"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <br />
    <input
      className="password-input"
      type="password"
      placeholder= "Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <br />
    <button className="login-button" onClick={handleSubmit}>Login</button>
    <br />
    <a className="forget-password" href="/forgot-password">Forget Password?</a>
  </div>
    </center>

  );
};

export default LoginPage;
