import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Account() {
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
    <div>
      <h2>User Account</h2>
      {user ? (
        <div>
          <p>User ID: {user.id}</p>
          <p>Username: {user.username}</p>
          {/* Display other user account details */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <Link to={`/game/user/${id}/edit`}>
        <button>Edit Account</button>
      </Link>
      <button>Delete Account</button>
    </div>
  );
}