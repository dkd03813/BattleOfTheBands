import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Account() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      // Handle the case where the token is missing
      console.error('Token not found in local storage');
      return;
    }
    console.log('Token in Account component:', token);

    fetch(`http://localhost:3000/game/user/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, // Include the token with "Bearer" prefix
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
        console.log('Response data:', data); // Log the response data
        setUser(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    // Initialize editedUser with the current user data
    setEditedUser(user);
  };

  const handleFormSubmit = () => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Token not found in local storage');
      return;
    }

    fetch(`http://localhost:3000/update-user/${id}`, {
      method: 'PUT', // Use the appropriate HTTP method (PUT or PATCH)
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedUser), // Replace with the edited user data
    })
      .then((response) => {
        if (response.ok) {
          // Handle success
          console.log('User data updated successfully');
          // You can choose to toggle isEditing here if needed
          setIsEditing(false);
        } else {
          throw new Error('Request failed');
        }
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
      });
  };

  console.log('Rendering Account component with ID:', id); // Log that the component is rendering

  return (
    <div>
      <h2>User Account</h2>
      {isEditing ? (
        <div>
          {/* EditForm component for editing user data */}
          <label htmlFor="editedUsername">Username:</label>
          <input
            type="text"
            id="editedUsername"
            value={editedUser ? editedUser.username : ''}
            onChange={(e) =>
              setEditedUser({ ...editedUser, username: e.target.value })
            }
          />
          {/* Add other input fields for editing user data */}
          <button onClick={handleFormSubmit}>Save Changes</button>
        </div>
      ) : user ? (
        <div>
          <p>User ID: {user.id}</p>
          <p>Username: {user.username}</p>
          {/* Display other user account details */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <button onClick={handleEditClick}>
        {isEditing ? 'Cancel Edit' : 'Edit Account'}
      </button>
      <button>Delete Account</button>
    </div>
  );
}







