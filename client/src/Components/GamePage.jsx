import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img from "../assets/JonBohnam.png";
import "../index.css";

export default function GamePage() {
  const imageFolderPath = "/src/assets";
  const navigate = useNavigate();

  const [bandMembers, setBandMembers] = useState([]);
  const [bandName, setBandName] = useState("");
  const [money, setMoney] = useState(0);
  const [cred, setCred] = useState(0);

  useEffect(() => {
    const storedBandName = localStorage.getItem("bandName");
    if (!storedBandName) {
      navigate("/game/start");
    } else {
      setBandName(storedBandName);

      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://localhost:3000/game/main/${storedBandName}`
          );
          const data = await response.json();
          console.log(data);

          console.log("Data received from server:", data);

          setBandMembers(data.bandMembers);
          setMoney(data.money);
          setCred(data.cred);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
  }, [money,cred]);

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
    marginTop: "20px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontFamily: "courier",
    fontSize: "16px",
    backgroundColor: "#279EFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const handleMediaEventsClick = () => {
    navigate(`/game/mediaEvent/${bandName}`);
  };

  return (
    <div className="bg-gray-900 scroll-smooth">
      {/* Here's the music. If you delete "control" it will autoplay with no controls, that is another option. */}
      <audio className="mx-12 mt-12" controls autoPlay>
        <source
          src={`${imageFolderPath}/8bit-music.mp3`}
          type="audio/mp3"
        ></source>
      </audio>
      <div style={containerStyle}>
        <h1 className="mx-12 my-6 text-white">Highway to Harmony</h1>
        <h2 className="text-white">Band Name: {bandName}</h2>
        <h3 className="text-white">Money: {money}</h3>
        <h3 className="text-white">Credibility: {cred}</h3>
        <div className="mb-3">
          <ul className="flex">
            {bandMembers.map((bandMember) => (
              <div
                className={`card ${
                  bandMember.isSelected ? "bg-primary text-white" : ""
                }`}
                style={{ width: "18rem", margin: "10px", cursor: "pointer" }}
                key={bandMember.id}
              >
                <img
                  src={`${imageFolderPath}/${bandMember.members.replace(
                    /\s+/g,
                    ""
                  )}.png`}
                  className="card-img-top"
                  alt={bandMember.members}
                />
                <div className="card-body">
                  <h5 className="card-title">{bandMember.members}</h5>
                  <p className="card-text">{bandMember.type}</p>
                  <p className="card-text">
                    Member ID: {bandMember.bandMemberID}
                  </p>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div style={buttonContainerStyle}>
          <button
            className="btn btn-primary"
            onClick={() => handleActivityClick("Band Practice")}
          >
            Band Practice
          </button>
          <button
        className="btn btn-primary"
        onClick={handleMediaEventsClick}
      >
        Media Events
      </button>
          <button
            className="btn btn-primary"
            onClick={() => handleActivityClick("Concerts and Gigs")}
          >
            Concerts and Gigs
          </button>
        </div>
      </div>
    </div>
  );
}
