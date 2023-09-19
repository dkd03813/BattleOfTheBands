import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img from "../assets/JonBohnam.png";
import "../index.css";

export default function MediaEvents() {
  const imageFolderPath = "/src/assets";
  const { bandName } = useParams(); // Extract bandName from route parameters
  const navigate = useNavigate(); // Access the navigate function

  const [mediaEvent, setMediaEvent] = useState({}); // Initialize as an object

  useEffect(() => {
    // Fetch media events for the specific bandName when the component mounts
    fetch(`http://localhost:3000/game/mediaEvent/${bandName}`)
      .then((response) => response.json())
      .then((data) => {
        // Set the retrieved media event data as an object
        console.log("Fetched media event:", data);
        setMediaEvent(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Empty dependency array to run this effect only once

  const handleNavigate = () => {
    // Perform the navigation when the button is clicked
    navigate(`/game/main/${bandName}`);
  
    // Check if practiceMult is in localStorage and is a positive value
    const practiceMult = localStorage.getItem("practiceMult");
  
    if (practiceMult !== null) {
      const parsedPracticeMult = parseFloat(practiceMult);
  
      if (!isNaN(parsedPracticeMult) && parsedPracticeMult !== 0) {
        // Check if it's not a Practice event
        if (mediaEvent.eventType !== "Practice") {
          if (mediaEvent.eventCred > 0) {
            // Calculate the new practiceMult value
            const updatedPracticeMult = parsedPracticeMult + Math.ceil(mediaEvent.eventCred / 2);
  
            // Update practiceMult in localStorage
            localStorage.setItem("practiceMult", updatedPracticeMult.toString());
          } else if (mediaEvent.eventCred < 0) {
            // Calculate the new practiceMult value
            const updatedPracticeMult = parsedPracticeMult + Math.ceil(mediaEvent.eventCred / 2);
  
            // Update practiceMult in localStorage
            localStorage.setItem("practiceMult", updatedPracticeMult.toString());
          }
        } else if (parsedPracticeMult < 0 && mediaEvent.eventCred > 0) {
          // Add mediaEvent.eventCred to practiceMult if practiceMult is negative and eventCred is positive
          const updatedPracticeMult = parsedPracticeMult + mediaEvent.eventCred;
  
          // Update practiceMult in localStorage
          localStorage.setItem("practiceMult", updatedPracticeMult.toString());
        }
      }
    }
  
    // Update UserSaves table with eventCred and eventMoney
    fetch(`http://localhost:3000/game/updateUserSaves/${bandName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventCred: mediaEvent.eventCred,
        eventMoney: mediaEvent.eventMoney,
        eventType: mediaEvent.eventType,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response if needed
        console.log("Updated UserSaves:", data);
      })
      .catch((error) => {
        console.error("Error updating UserSaves:", error);
      });
  };
  
  

  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    margin: "100px",
    padding: '20px'
  };

  const cardStyle = {
    background: "linear-gradient(to bottom, #FFA7D1, #B19CD9)",
    color: "#000000",
    padding: "40px",
    borderRadius: "15px",
    margin: "20px",
    fontFamily: "Courier New, monospace",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    fontSize: "18px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontFamily: "Courier New, monospace",
    fontSize: "18px",
    background: "linear-gradient(to bottom, #FFA7D1, #B19CD9)",
    color: "#311C87",
    border: "none",
    borderRadius: "15px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <div className="bg-gray-900 scroll-smooth" style={pageStyle}>
      <div className="text-center">
        <img
          src={`${imageFolderPath}/MediaEvent-Good.png`}
          alt="title"
          className="mx-auto"
          style={{ width: "25%" }} // Adjust the width as needed
        />
        <div className="mb-3">
          <div style={cardStyle}>
            <h1 className="card-title" style={{ fontSize: "78px" }}>{mediaEvent.eventTitle}</h1>
            <h1 className="card-text" style={{ fontSize: "50px" }}>Type: {mediaEvent.eventType}</h1>
            <h1 className="card-text" style={{ fontSize: "45px" }}>Details: {mediaEvent.eventDetails}</h1>
            <h1 className="card-text">Money: {mediaEvent.eventMoney}</h1>
            <h1 className="card-text">Credibility: {mediaEvent.eventCred}</h1>
          </div>
        </div>
        <button style={buttonStyle} onClick={handleNavigate}>
          <h1>Accept and Continue</h1>
        </button>
      </div>
    </div>
  );
}


       





