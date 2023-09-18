import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img from "../assets/JonBohnam.png";
import "../index.css";

export default function Practice() {
  const imageFolderPath = "/src/assets";
  const { bandName } = useParams();
  const navigate = useNavigate();

  const [practice, setPractice] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/game/practice/${bandName}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched practice event:", data);
        setPractice(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [bandName]);

  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const cardStyle = {
    background: "linear-gradient(to bottom, #FFA7D1, #B19CD9)",
    color: "#311C87",
    padding: "20px",
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

  const handleNavigate = () => {
    localStorage.setItem("practiceMult", practice.eventCred);
    navigate(`/game/main/${bandName}`);
    console.log("Sending eventType in the request:", practice.eventType);

    fetch(`http://localhost:3000/game/updateUserSaves/${bandName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventCred: practice.eventCred,
        eventMoney: practice.eventMoney,
        eventType: practice.eventType,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Updated UserSaves:", data);
      })
      .catch((error) => {
        console.error("Error updating UserSaves:", error);
      });
  };

  return (
    <div className="bg-gray-900 scroll-smooth" style={pageStyle}>
      <div className="text-center">
      <img
  src={`${imageFolderPath}/BandRehearsal3.png`}
  alt="title"
  className="mx-auto"
  style={{ width: "30%" }} // Adjust the width as needed
/>
        <h1 className="text-4xl my-6 text-white font-pixel">Highway to Harmony</h1>
        <div className="mb-3">
          <div style={cardStyle}>
            <h1 className="card-title" style={{ fontSize: "78px" }}>{practice.eventTitle}</h1>
            <h1 className="card-text" style={{ fontSize: "50px" }}>Type: {practice.eventType}</h1>
            <h1 className="card-text" style={{ fontSize: "45px" }}>The Details: {practice.eventDetails}</h1>
            <h1 className="card-text">Money: {practice.eventMoney}</h1>
            <h1 className="card-text">Concert Multiplier: {practice.eventCred}</h1>
          </div>
        </div>
        <button style={buttonStyle} onClick={handleNavigate}>
          <h1>Accept and Continue</h1>
        </button>
      </div>
    </div>
  );
}
