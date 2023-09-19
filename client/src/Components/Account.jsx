import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "../index.css";

const buttonContainerStyle = {
  display: 'flex',
  gap: '20px',
};

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

  const handleDeleteClick = () => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Token not found in local storage');
      return;
    }

    if (window.confirm('Are you sure you want to delete your account?')) {
      fetch(`http://localhost:3000/game/user/delete/${id}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
            console.log('User account deleted successfully');
            // Perform any necessary actions after deletion, e.g., redirect to a different page
          } else {
            throw new Error('Request failed');
          }
        })
        .catch((error) => {
          console.error('Error deleting user account:', error);
        });
    }
  };

  console.log('Rendering Account component with ID:', id);

  return (
    <div className="my-12 mx-12">
      <h1 className="text-white mb-6">User Account</h1>
      {isEditing ? (
        <div>
          <label className="text-white mr-6 mb-6" htmlFor="editedUsername">Username:</label>
          <input
            type="text"
            id="editedUsername"
            key="editedUsername"
            value={editedUser.username}
            onChange={(e) =>
              setEditedUser((prevUser) => ({ ...prevUser, username: e.target.value }))
            }
          />
          <div style={buttonContainerStyle}>
          <button onClick={handleFormSubmit} className="bg-blue-900 hover:bg-blue-700 text-white m-6 ml-24 py-2 px-4 rounded-full">Save Changes</button></div>
        </div>
      ) : user ? (
        <div>
          <p className="text-white">User ID: {user.id}</p>
          <p className="text-white">Username: {user.username}</p>
        </div>
      ) : (
        <p className="text-white m-12">Loading user data...</p>
      )}
        <div style={buttonContainerStyle}>
        <Link to="/game">
          <button className="bg-gray-700 hover:bg-gray-500 text-gray-100 py-2 px-4 rounded-full">Back</button>
        </Link>
      <button onClick={handleEditClick} className="bg-gray-700 hover:bg-gray-500 text-white  py-2 px-4 rounded-full">
        {isEditing ? 'Cancel Edit' : 'Edit Account'}
      </button>
        <button onClick={handleDeleteClick} className="bg-gray-400 hover:bg-red-500 text-white py-2 px-4 rounded-full">Delete Account</button>
    </div>
    </div>
  );
}










