// navigation bar should only be presented to the user if they have successfully created an account or logged in to a previously existing account
//This will be the parent route to many different react components (not create or login or index though), the index element that should be loaded at all times (unless the user has started the game) should be GameStart (essentially meaning that they will see a navbar and a page to start the game after a successful login)
//Name of the game at the very far left, Account button on the far right that will navigate a user to a child component called "Account": allows the user to edit and delete their entire account
//Another button will be to the right of account called "Band" that when pressed will load a component called Band: this component will allow the user to change the name of the band and view the names of the members in the band that they had previously selected
// Band button should only show up after the user has selected either create new save or load previously existing save, two buttons that are on the GameStart component

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function NavBar() {
  const { id } = useParams(); // Get the userId from the route parameter
  const [user, setUser] = useState(null); // State to store user data

  useEffect(() => {
    // Fetch user data based on the userId when the component mounts
    fetch(`http://localhost:3000/game/user/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, [id]); // Trigger the fetch when the userId changes

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={`/game/user/${id}`}>Account</Link>
        </li>
        {/* Add more navigation items as needed */}
      </ul>

      {user && (
        <div>
          <h2>User Account</h2>
          <p>User ID: {user.id}</p>
          <p>Username: {user.username}</p>
          {/* Display other user account details */}
        </div>
      )}
    </nav>
  );
}