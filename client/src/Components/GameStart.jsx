import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img from "../assets/JonBohnam.png";
import "../index.css";

export default function GameStart() {
  const imageFolderPath = "/src/assets";

  const [showForm, setShowForm] = useState(false);
  const [showSavedGames, setShowSavedGames] = useState(false); // Added state to control saved games display
  const [bandMembers, setBandMembers] = useState([]);
  const [bandName, setBandName] = useState("");
  const [bandMemberIDs, setBandMemberIDs] = useState([]);
  const [savedGames, setSavedGames] = useState([]);
  const [uniqueBandNames, setUniqueBandNames] = useState([]);
  const navigate = useNavigate();

  // Fetch user's saved games from the backend
  const fetchSavedGames = async () => {
    try {
      const userID = localStorage.getItem("userId");
      const response = await fetch(`http://localhost:3000/saved-games/${userID}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSavedGames(data);

      // Extract unique band names from the saved games
      const uniqueNames = Array.from(new Set(data.map((game) => game.bandName)));
      setUniqueBandNames(uniqueNames);
    } catch (error) {
      console.error(error);
    }
  };

  const loadSavedGame = (selectedGame) => {
    // this is for the GamePage component, which depends on a local storage key named bandName in order to send the appropriate request to the server
    localStorage.setItem("bandName", selectedGame.bandName); // Set the bandName in local storage
    setBandName(selectedGame.bandName);
    setBandMemberIDs(selectedGame.bandMemberIDs);

    // Use the navigate function to navigate to the correct path
    navigate(`/game/main/${selectedGame.bandName}`);
  };

  // Function to submit the form and navigate to the selected game
  const submitForm = async (e) => {
    e.preventDefault();

    if (bandMemberIDs.length === 4 && bandName.trim() !== "") {
      const userID = localStorage.getItem("userId");
      const requestBody = {
        userID,
        bandMemberIDs,
        bandName,
      };

      try {
        const response = await fetch("http://localhost:3000/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        localStorage.setItem("bandName", bandName);
        navigate(`/game/main/${bandName}`);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please select four band members and provide a band name.");
    }
  };

  useEffect(() => {
    fetchSavedGames();
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const buttonContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  };

  const startGameClickHandler = () => {
    setShowForm(true);
  };

  const loadPreviousGameClickHandler = () => {
    if (savedGames.length > 0) {
      setShowForm(false);
      setShowSavedGames(!showSavedGames); // Toggle the display of saved games
    } else {
      alert("No saved games found for your account.");
    }
  };

  // Function to toggle band member selection
  const toggleSelection = (bandMemberID) => {
    setBandMembers((prevMembers) =>
      prevMembers.map((bandMember) =>
        bandMember.id === bandMemberID
          ? { ...bandMember, isSelected: !bandMember.isSelected }
          : bandMember
      )
    );

    // Update the selected band member IDs
    setBandMemberIDs((prevIDs) =>
      prevIDs.includes(bandMemberID)
        ? prevIDs.filter((id) => id !== bandMemberID)
        : [...prevIDs, bandMemberID]
    );
  };

  return (
    <div className="bg-gray-900 scroll-smooth">
      <audio className="mx-12 mt-12" controls>
        <source src={`${imageFolderPath}/8bit-music.mp3`} type="audio/mp3"></source>
      </audio>
      <div style={containerStyle}>
        <img src={`${imageFolderPath}/HighwayHarmony2.png`} alt="title" className="object-scale-down w-40" />
        <h1 className="mx-12 my-6 text-white">Highway to Harmony</h1>
        {showForm ? (
          <form>
            {/* Input field for the user to enter the band name */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your band name"
                value={bandName}
                onChange={(e) => setBandName(e.target.value)}
              />
            </div>
            <ul className="flex">
              {bandMembers.map((bandMember, index) => (
                <div
                  className={`card ${bandMember.isSelected ? 'bg-primary text-white' : ''}`}
                  style={{ width: '18rem', margin: '10px', cursor: 'pointer' }}
                  key={bandMember.id}
                  onClick={() => toggleSelection(bandMember.id)}
                >
                  <img
                    src={`${imageFolderPath}/${bandMember.name.replace(/\s+/g, '')}.png`}
                    className="card-img-top"
                    alt={bandMember.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{bandMember.name}</h5>
                    <p className="card-text">{bandMember.type}</p>
                    <p className="card-text">Member ID: {bandMember.id}</p>
                    <p className="card-text">{bandMember.archetype}</p>
                    <p className="card-text">{bandMember.archetypeDes}</p>
                  </div>
                  <button className="btn btn-primary mt-3" onClick={submitForm}>
                    <h1>{index + 1}</h1>
                  </button>
                </div>
              ))}
            </ul>
          </form>
        ) : (
          <div>
            <div style={buttonContainerStyle}>
              <button
                className="btn btn-primary"
                onClick={loadPreviousGameClickHandler}
              >
                <h1>Load Previous Game</h1>
              </button>
              <button
                className="btn btn-primary"
                onClick={startGameClickHandler}
              >
                <h1>Start Game</h1>
              </button>
            </div>
            {showSavedGames && uniqueBandNames.length > 0 && ( // Conditionally render saved games
              <div>
                <h2 className="text-white mt-4 text-center">Select a saved game:</h2>
                <div style={buttonContainerStyle}>
                  {uniqueBandNames.map((bandName, index) => (
                    <button
                      className="btn btn-primary"
                      onClick={() => loadSavedGame(savedGames.find((game) => game.bandName === bandName))}
                      key={bandName}
                    >
                      <h1>{index + 1}</h1> {bandName}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}



