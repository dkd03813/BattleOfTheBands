import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img from "../assets/JonBohnam.png";
import "../index.css";

export default function GameStart() {
  const imageFolderPath = "/src/assets";
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [showSavedGames, setShowSavedGames] = useState(false);
  const [bandMembers, setBandMembers] = useState([]);
  const [bandName, setBandName] = useState("");
  const [bandMemberIDs, setBandMemberIDs] = useState([]);
  const [savedGames, setSavedGames] = useState([]);
  const [uniqueBandNames, setUniqueBandNames] = useState([]);

  // Fetch user's saved games from the backend
  const fetchSavedGames = async () => {
    try {
      const userID = localStorage.getItem("userId");
      const response = await fetch(
        `http://localhost:3000/saved-games/${userID}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSavedGames(data);

      // Extract unique band names from the saved games
      const uniqueNames = Array.from(
        new Set(data.map((game) => game.bandName))
      );
      setUniqueBandNames(uniqueNames);
    } catch (error) {
      console.error(error);
    }
  };

  const loadSavedGame = (selectedGame) => {
    localStorage.setItem("bandName", selectedGame.bandName);
    setBandName(selectedGame.bandName);
    setBandMemberIDs(selectedGame.bandMemberIDs);
    navigate(`/game/main/${selectedGame.bandName}`);
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

  const submitForm = async (e) => {
    e.preventDefault();

    const trimmedBandName = bandName.trim();

    if (bandMemberIDs.length === 4 && trimmedBandName !== "") {
      const userID = localStorage.getItem("userId");
      const requestBody = {
        userID,
        bandMemberIDs,
        bandName: trimmedBandName,
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

        localStorage.setItem("bandName", trimmedBandName);
        navigate(`/game/main/${trimmedBandName}`);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please select four band members and provide a band name.");
    }
  };

  const fetchBandMembers = async () => {
    try {
      const response = await fetch("http://localhost:3000/game");
      if (!response.ok) {
        throw Error("Network response was not ok");
      }
      const data = await response.json();

      // Add 'isSelected' property to each band member
      const bandMembersWithSelection = data.map((bandMember) => ({
        ...bandMember,
        isSelected: false, // Initialize as not selected
      }));
      setBandMembers(bandMembersWithSelection);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleSelection = (bandMemberID) => {
    setBandMembers((prevMembers) =>
      prevMembers.map((bandMember) =>
        bandMember.id === bandMemberID
          ? { ...bandMember, isSelected: !bandMember.isSelected }
          : bandMember
      )
    );

    setBandMemberIDs((prevIDs) =>
      prevIDs.includes(bandMemberID)
        ? prevIDs.filter((id) => id !== bandMemberID)
        : [...prevIDs, bandMemberID]
    );
  };

  useEffect(() => {
    fetchSavedGames();
    fetchBandMembers();
  }, []);

  return (
    <div className="bg-gray-900 scroll-smooth">
      <audio className="mx-12 mt-12" controls>
        <source src={`${imageFolderPath}/8bit-music.mp3`} type="audio/mp3"></source>
      </audio>
      <div className="d-flex flex-column align-items-center justify-content-center h-100">
        <img src={`${imageFolderPath}/HighwayHarmony2.png`} alt="title" className="object-scale-down w-40" />
        <h1 className="mx-12 my-6 text-white">Highway to Harmony</h1>
        {showForm && (
          <form onSubmit={submitForm}>
            <div className="m-24">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your band name"
                value={bandName}
                onChange={(e) => setBandName(e.target.value)}
              />
            </div>
            <ul className="row justify-center">
  {bandMembers.map((bandMember) => (
    <div className="col-md-3 m-12" key={bandMember.id}>
      <div
        className={`card ${bandMember.isSelected ? "bg-primary text-white" : ""}`}
        style={{ cursor: "pointer" }}
        onClick={() => toggleSelection(bandMember.id)}
      >
        <img src={`${imageFolderPath}/${bandMember.name.replace(/\s+/g, "")}.png`} className="card-img-top" alt={bandMember.name} />
        <div className="card-body">
          <h5 className="card-title">{bandMember.name}</h5>
          <p className="card-text">{bandMember.type}</p>
          <p className="card-text">Member ID: {bandMember.id}</p>
          <p className="card-text">{bandMember.archetype}</p>
          <p className="card-text">{bandMember.archetypeDes}</p>
        </div>
      </div>
    </div>
  ))}
</ul>
<div className="text-center">
  <button className="btn btn-primary mt-3 w-50 mb-32" type="submit">
    <h1>Submit</h1>
  </button>
</div>
          </form>
        )}
        {!showForm && (
          <div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary" onClick={loadPreviousGameClickHandler}>
                <h1>Load Previous Game</h1>
              </button>
              <button className="btn btn-primary" onClick={startGameClickHandler}>
                <h1>Start Game</h1>
              </button>
            </div>
            {showSavedGames && uniqueBandNames.length > 0 && (
              <div>
                <h2 className="text-white mt-4 text-center">Select a saved game:</h2>
                <div className="d-grid gap-2">
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

