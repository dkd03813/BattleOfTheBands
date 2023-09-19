import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img from "../assets/JonBohnam.png";
import "../index.css";

export default function Concerts() {
  const imageFolderPath = "/src/assets";
  const { bandName } = useParams(); // Extract bandName from route parameters
  const navigate = useNavigate(); // Access the navigate function

  const [concert, setConcert] = useState({}); // Initialize as an object

  useEffect(() => {
    // Fetch media events for the specific bandName when the component mounts
    fetch(`http://localhost:3000/game/concert/${bandName}`)
      .then((response) => response.json())
      .then((data) => {
        // Set the retrieved media event data as an object
        console.log("Fetched Concert:", data);
        setConcert(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Empty dependency array to run this effect only once

  const handleNavigate = () => {
    // Perform the navigation when the button is clicked
    navigate(`/game/main/${bandName}`);

    // Fetch practiceMult from local storage
    const practiceMult = localStorage.getItem("practiceMult");

    // Convert practiceMult to a float
    const parsedPracticeMult = parseFloat(practiceMult);

    // Check if practiceMult is a positive value and eventMoney/eventCred are positive
    if (!isNaN(parsedPracticeMult) && parsedPracticeMult > 0 && concert.eventMoney > 0 && concert.eventCred > 0) {
      // Multiply eventMoney and eventCred by practiceMult
      const updatedEventMoney = Math.floor(concert.eventMoney * parsedPracticeMult);
      const updatedEventCred = Math.floor(concert.eventCred * parsedPracticeMult);

      // Update UserSaves table with updated eventCred and eventMoney
      updateEventInUserSaves(updatedEventCred, updatedEventMoney);
    } else if (!isNaN(parsedPracticeMult) && parsedPracticeMult > 0 && (concert.eventMoney < 0 || concert.eventCred < 0)) {
      // Convert practiceMult to a positive value
      const positivePracticeMult = Math.abs(parsedPracticeMult);

      // Divide eventMoney and eventCred by positivePracticeMult and round down
      const updatedEventMoney = Math.floor(concert.eventMoney / positivePracticeMult);
      const updatedEventCred = Math.floor(concert.eventCred / positivePracticeMult);

      // Update UserSaves table with updated eventCred and eventMoney
      updateEventInUserSaves(updatedEventCred, updatedEventMoney);
    } else if (!isNaN(parsedPracticeMult) && parsedPracticeMult < 0 && concert.eventMoney > 0 && concert.eventCred > 0) {
      // Convert practiceMult to a positive value
      const positivePracticeMult = Math.abs(parsedPracticeMult);

      // Divide eventMoney and eventCred by positivePracticeMult and round down
      const updatedEventMoney = Math.floor(concert.eventMoney / positivePracticeMult);
      const updatedEventCred = Math.floor(concert.eventCred / positivePracticeMult);

      // Update UserSaves table with updated eventCred and eventMoney
      updateEventInUserSaves(updatedEventCred, updatedEventMoney);
    } else if (!isNaN(parsedPracticeMult) && parsedPracticeMult < 0 && concert.eventMoney < 0 && concert.eventCred < 0) {
      // Convert practiceMult to a positive value
      const positivePracticeMult = Math.abs(parsedPracticeMult);

      // Multiply eventMoney and eventCred by positivePracticeMult
      const updatedEventMoney = Math.floor(concert.eventMoney * positivePracticeMult);
      const updatedEventCred = Math.floor(concert.eventCred * positivePracticeMult);

      // Update UserSaves table with updated eventCred and eventMoney
      updateEventInUserSaves(updatedEventCred, updatedEventMoney);
    }
  };

  const updateEventInUserSaves = (updatedEventCred, updatedEventMoney) => {
    // Update UserSaves table with updated eventCred and eventMoney
    fetch(`http://localhost:3000/game/updateUserSaves/${bandName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventCred: updatedEventCred,
        eventMoney: updatedEventMoney,
        eventType: concert.eventType,
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
    background: "linear-gradient(to bottom,  #FFA7D1, #B19CD9)",
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
          src={`${imageFolderPath}/Concert4.png`}
          alt="title"
          className="mx-auto"
          style={{ width: "25%" }} // Adjust the width as needed
        />
        <div className="mb-3">
          <div style={cardStyle}>
            <h1 className="card-title" style={{ fontSize: "78px" }}>{concert.eventTitle}</h1>
            <h1 className="card-text" style={{ fontSize: "50px" }}>Type: {concert.eventType}</h1>
            <h1 className="card-text" style={{ fontSize: "45px" }}>Details: {concert.eventDetails}</h1>
            <h1 className="card-text">Money: {concert.eventMoney}</h1>
            <h1 className="card-text">Credibility: {concert.eventCred}</h1>
          </div>
        </div>
        <button style={buttonStyle} onClick={handleNavigate}>
          <h1>Accept and Continue</h1>
        </button>
      </div>
    </div>
  );
}
