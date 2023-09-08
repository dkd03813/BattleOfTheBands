import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Account() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ username: '', password: '' });

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Token not found in local storage');
      return;
    }

    fetch(`http://localhost:3000/game/user/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
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
        console.log('Response data:', data);
        setUser(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    // Initialize editedUser with the current user data if user exists
    setEditedUser((prevUser) => (user ? { ...user } : prevUser));
  };

  const handleFormSubmit = () => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Token not found in local storage');
      return;
    }

    fetch(`http://localhost:3000/game/user/edit/${id}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedUser),
    })
      .then((response) => {
        if (response.ok) {
          console.log('User data updated successfully');
          setIsEditing(false);
        } else {
          throw new Error('Request failed');
        }
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
      });
  };

  console.log('Rendering Account component with ID:', id);

  return (
    <div>
      <h2>User Account</h2>
      {isEditing ? (
        <div>
          <label htmlFor="editedUsername">Username:</label>
          <input
            type="text"
            id="editedUsername"
            key="editedUsername"
            value={editedUser.username}
            onChange={(e) =>
              setEditedUser((prevUser) => ({ ...prevUser, username: e.target.value }))
            }
          />
          <button onClick={handleFormSubmit}>Save Changes</button>
        </div>
      ) : user ? (
        <div>
          <p>User ID: {user.id}</p>
          <p>Username: {user.username}</p>
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










