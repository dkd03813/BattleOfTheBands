import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const userLogin = async (e) => {
    e.preventDefault();
  
    try {
      console.log("in the try");
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      // Log the response status
      console.log('Response status:', response.status);
  
      // Parse the JSON response
      const data = await response.json();
      console.log('Response data:', data);
  
      // Check if the request was successful
      if (response.ok) {
        // Check if login was successful
        if (data.success) {
          console.log('User successfully logged in');
          // Redirect to the home page on successful login
          navigate('/');
        } else {
          console.log('User login failed');
        }
      } else {
        console.error('POST request failed'); // Log an error if the request fails
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={userLogin}>
          Enter
        </button>
        <Link to="/">
          <button>Back</button>
        </Link>
      </form>
    </div>
  );
}



