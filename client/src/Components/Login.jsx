import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const imageFolderPath = '/src/assets';

const buttonContainerStyle = {
 display: 'flex',
 gap: '20px',
 padding: '10px',
 margin: '10px',
};

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const userLogin = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          console.log('User successfully logged in');
          const token = data.token;
          localStorage.setItem('token', token); // Store the token with "Bearer " prefix
          localStorage.setItem('userId', data.user.id); 
          navigate('/game');
        } else {
          console.log('User login failed');
        }
      } else {
        console.error('POST request failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
 
  return (
    
    <div>
      <section className="h-screen bg-gray-900 flex items-center justify-center text-center text-3xl">
      <ul className="list-none text-center">
      <li className="inline-block"><img src={`${imageFolderPath}/guitar-image.png`} alt="title" className="object-scale-down h-48" /></li>
      <li><h1 className="text-white">Login</h1></li>
      <form>
        <li className="inline-block">
        <div>
          <label htmlFor="username" className="text-white"><h1>Username:</h1></label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>
            </li>
            <li>
        <div>
          <label htmlFor="password" className="text-white"><h1 >Password:</h1></label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
            </li>
            <form style={buttonContainerStyle}>
            <li className="text-decoration: none">
        <Link to="/">
          <button className="bg-gray-700 hover:bg-blue-100 hover:text-gray-700 text-blue-300 py-2 px-4 rounded-full"><h1>Back</h1></button>
        </Link>
            </li>
            <li>
        <button type="submit" onClick={userLogin} className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full"><h1>Enter</h1>
        </button>
            </li>
            </form>
      </form>
            </ul>
    </section>
    </div>
  );
}





