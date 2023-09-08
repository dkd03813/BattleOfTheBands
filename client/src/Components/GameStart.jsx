//This will serve as the start screen that the user will be presented with only if the user is able to successfully create an account or login to their account
// Page will include the name of the game along with two buttons: 
// New Game
// Continue: allows the user to select from a previous save game

import React from 'react';

export default function GameStart() {
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
    console.log('Start Game clicked');
  };

  const loadPreviousGameClickHandler = () => {
    console.log('Load Previous Game clicked');
  };

  return (
    <div style={containerStyle}>
      <h1 style={gameNameStyle}>Your Game Name</h1>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={startGameClickHandler}>
          Start Game
        </button>
        <button style={buttonStyle} onClick={loadPreviousGameClickHandler}>
          Load Previous Game
        </button>
      </div>
    </div>
  );
}
