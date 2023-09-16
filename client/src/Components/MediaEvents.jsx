import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img from "../assets/JonBohnam.png";
import "../index.css";

export default function MediaEvents() {
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

    // Update UserSaves table with eventCred and eventMoney
    // You can make a POST request to your server to update the database
    fetch(`http://localhost:3000/game/updateUserSaves/${bandName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventCred: mediaEvent.eventCred,
        eventMoney: mediaEvent.eventMoney,
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

  return (
    <div>
      <div className="card">
        <div className="card-body">
        <h2>Media Event</h2>
          <h3 className="card-title">{mediaEvent.eventTitle}</h3>
          <p className="card-text">Type: {mediaEvent.eventType}</p>
          <p className="card-text">Details: {mediaEvent.eventDetails}</p>
          <p className="card-text">Money: {mediaEvent.eventMoney}</p>
          <p className="card-text">Credibility: {mediaEvent.eventCred}</p>
          <p className="card-text">Created At: {mediaEvent.createdAt}</p>
          <p className="card-text">Updated At: {mediaEvent.updatedAt}</p>
          <button className="btn btn-primary" onClick={handleNavigate}>
            Accept and Continue
          </button>
        </div>
      </div>
    </div>
  );
}




