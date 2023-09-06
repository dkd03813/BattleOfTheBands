// navigation bar should only be presented to the user if they have successfully created an account or logged in to a previously existing account
//This will be the parent route to many different react components (not create or login or index though), the index element that should be loaded at all times (unless the user has started the game) should be GameStart (essentially meaning that they will see a navbar and a page to start the game after a successful login)
//Name of the game at the very far left, Account button on the far right that will navigate a user to a child component called "Account": allows the user to edit and delete their entire account
//Another button will be to the right of account called "Band" that when pressed will load a component called Band: this component will allow the user to change the name of the band and view the names of the members in the band that they had previously selected
// Band button should only show up after the user has selected either create new save or load previously existing save, two buttons that are on the GameStart component

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null); // Add token state
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions (e.g., clear user token)
    localStorage.removeItem('token');
    setToken(null); // Clear token from state
    // Redirect to the login page after logout
    navigate('/login');
  };

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const storedToken = localStorage.getItem('token'); // Retrieve token from local storage

    if (userId && storedToken) {
      // Fetch user data based on the user ID when the component mounts
      fetch(`http://localhost:3000/game/user/${userId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${storedToken}`, // Include the token in the headers
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Request failed');
          }
        })
        .then((data) => {
          setUser(data);
          setToken(storedToken); // Store token in component state
        })
        .catch((error) => console.error('Error fetching user data:', error));
    }
  }, []); // The empty dependency array ensures it runs only once on mount

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          {/* Fetch user data when the "Account" link is clicked */}
          <Link
            to={`/game/user/${localStorage.getItem('userId')}`}
            onClick={() => {
              const userId = localStorage.getItem('userId');
              if (userId && token) {
                // Fetch user data based on the user ID when the link is clicked
                fetch(`http://localhost:3000/game/user/${userId}`, {
                  method: 'GET',
                  headers: {
                    'Authorization': `Bearer ${token}`, // Include the token in the headers
                    'Content-Type': 'application/json',
                  },
                })
                  .then((response) => response.json())
                  .then((data) => setUser(data))
                  .catch((error) => console.error('Error fetching user data:', error));
              }
            }}
          >
            Account
          </Link>
        </li>
        <li className="navbar-item">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
}


