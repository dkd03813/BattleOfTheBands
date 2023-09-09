import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img from "../assets/JonBohnam.png"

export default function GameStart() {
  const imageFolderPath = '/src/assets';


  const [showForm, setShowForm] = useState(false);
  const [bandMembers, setBandMembers] = useState([]); // State to store band members data

  // Function to fetch band members data from the backend
  const fetchBandMembers = async () => {
    try {
      const response = await fetch('http://localhost:3000/game'); // Update the endpoint to your backend route
      console.log(response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBandMembers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Fetch band members data when the component mounts
    fetchBandMembers();
  }, []); // Track whether to show the form

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const gameNameStyle = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const startGameClickHandler = () => {
    setShowForm(true); // Show the form when Start Game is clicked
  };

  const loadPreviousGameClickHandler = () => {
    console.log('Load Previous Game clicked');
  };

  return (
    <div style={containerStyle}>
      <h1 style={gameNameStyle}>Your Game Name</h1>
      {showForm ? (
        <form style={buttonContainerStyle}>
          {bandMembers.map((bandMember) => (
            <div className="card" style={{ width: '18rem', margin: '10px' }} key={bandMember.id}>
              <img src={`${imageFolderPath}/${bandMember.name.replace(/\s+/g, '')}.png`} className="card-img-top" alt={bandMember.name} />
              <div className="card-body">
                <h5 className="card-title">{bandMember.name}</h5>
                <p className="card-text">{bandMember.archetype}</p>
                <p className="card-text">{bandMember.archetypeDes}</p>
                <p className="card-text">{bandMember.type}</p>
              </div>
            </div>
          ))}
          <button style={buttonStyle}>Submit</button>
        </form>
      ) : (
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={startGameClickHandler}>
            Start Game
          </button>
          <button style={buttonStyle} onClick={loadPreviousGameClickHandler}>
            Load Previous Game
          </button>
        </div>
      )}
    </div>
  );
}



