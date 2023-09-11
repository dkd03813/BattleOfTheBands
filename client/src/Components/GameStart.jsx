import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img from "../assets/JonBohnam.png"
import "../index.css";

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
    fontFamily: 'mono',
    fontSize: '24px',
    marginBottom: '20px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '20px',
  };


  const buttonStyle = {
    padding: '10px 20px',
    fontFamily: 'courier',
    fontSize: '16px',
    backgroundColor: '#279EFF',
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
    <div className="bg-gray-900">
        {/* Here's the music. If you delete "control" it will autoplay with no controls, that is another option. */}
      <audio className="mx-12" controls autoPlay>
        <source src={`${imageFolderPath}/8bit-music.mp3`} type="audio/mp3"></source>
        </audio>
    <div style={containerStyle}>
      <h1 className="mx-12 my-6 text-white">Highway to Harmony</h1>
      {showForm ? (
        <form>
          <ul className="flex">
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
          </ul>
          <button style={buttonStyle}><h1>Submit</h1></button>
        </form>
      ) : (
        <div style={buttonContainerStyle}>
          <button className="bg-blue-500 hover:bg-blue-300 text-white font-mono py-2 px-4 rounded-full" onClick={loadPreviousGameClickHandler}>
            <h1>Load Previous Game</h1>
          </button>
          <button className="bg-blue-700 hover:bg-blue-900 text-white py-2 px-4 rounded-full" onClick={startGameClickHandler}>
           <h1>Start Game</h1>
          </button>
        </div>
      )}
    </div>
    </div>
  );
}



