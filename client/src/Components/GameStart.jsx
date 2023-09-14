import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img from "../assets/JonBohnam.png";
import "../index.css";

export default function GameStart() {
  const imageFolderPath = "/src/assets";

  const [showForm, setShowForm] = useState(false);
  const [bandMembers, setBandMembers] = useState([]); // State to store band members data
  const [bandName, setBandName] = useState(""); // State to store user's band name
  const [bandMemberIDs, setBandMemberIDs] = useState([]); // State to store selected band member IDs

  // Function to fetch band members data from the backend
  // When fetching band members, add the 'isSelected' property
  const fetchBandMembers = async () => {
    try {
      
      const response = await fetch("http://localhost:3000/game");
      if (!response.ok) {
        throw new Error("Network response was not ok");
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

  const navigate = useNavigate(); // Initialize the useNavigate hook

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

  const submitForm = async (e) => {
    e.preventDefault();
  
    // Check if the user has selected four band members and provided a band name
    if (bandMemberIDs.length === 4 && bandName.trim() !== "") {
      // Get the User ID from local storage
      const userID = localStorage.getItem("userId");
  
      // Create a request body with the collected data, including band name and bandMemberIDs as an array
      const requestBody = {
        userID,
        bandMemberIDs, // Include the user's selected band member IDs as an array
        bandName, // Include the user's entered band name
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
  
        // Save the bandName to local storage
        localStorage.setItem("bandName", bandName);
  
        // Navigate to the '/game/main' path upon successful submission
        navigate(`/game/main/${bandName}`);
      } catch (error) {
        console.error(error);
      }
    } else {
      // Display an error message to the user if the conditions are not met
      alert("Please select four band members and provide a band name.");
    }
  };

  useEffect(() => {
    // Fetch band members data when the component mounts
    fetchBandMembers();
  }, []); // Track whether to show the form

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "20px",
  };

  
  const startGameClickHandler = () => {
    setShowForm(true); // Show the form when Start Game is clicked
  };

  const loadPreviousGameClickHandler = () => {
    console.log("Load Previous Game clicked");
  };

  return (
    <div className="bg-gray-900">
      {/* Here's the music. If you delete "control" it will autoplay with no controls, that is another option. */}
      <audio className="mx-12" controls autoPlay>
        <source
          src={`${imageFolderPath}/8bit-music.mp3`}
          type="audio/mp3"
        ></source>
      </audio>
      <div style={containerStyle}>
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
              {bandMembers.map((bandMember) => (
                <div
                  className={`card ${
                    bandMember.isSelected ? "bg-primary text-white" : ""
                  }`}
                  style={{
                    width: "18rem",
                    margin: "10px",
                    cursor: "pointer",
                  }}
                  key={bandMember.id}
                  onClick={() => toggleSelection(bandMember.id)}
                >
                  <img
                    src={`${imageFolderPath}/${bandMember.name.replace(
                      /\s+/g,
                      ""
                    )}.png`}
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
                </div>
              ))}
            </ul>
            <button className="btn btn-primary mt-3" onClick={submitForm}>
              Submit
            </button>
          </form>
        ) : (
          <div style={buttonContainerStyle}>
            <button
              className="bg-blue-500 hover:bg-blue-300 text-white font-mono py-2 px-4 rounded-full"
              onClick={loadPreviousGameClickHandler}
            >
              <h1>Load Previous Game</h1>
            </button>
            <button
              className="bg-blue-700 hover:bg-blue-900 text-white py-2 px-4 rounded-full"
              onClick={startGameClickHandler}
            >
              <h1>Start Game</h1>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


