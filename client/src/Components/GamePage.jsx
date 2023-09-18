import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img from "../assets/JonBohnam.png";
import "../index.css";
import CustomAlert from "./CustomAlert"; // Import the custom alert component

export default function GamePage() {
  const imageFolderPath = "/src/assets";
  const navigate = useNavigate();

  const [bandMembers, setBandMembers] = useState([]);
  const [bandName, setBandName] = useState("");
  const [money, setMoney] = useState(0);
  const [cred, setCred] = useState(0);
  const [practiceDone, setPracticeDone] = useState(false); // Track if practice is done
  const [practiceCount, setPracticeCount] = useState(0); // Track the number of practice sessions
  const [showPracticeAlert, setShowPracticeAlert] = useState(false); // State to control practice alert
  const [showConcertAlert, setShowConcertAlert] = useState(false); // State to control concert alert

  useEffect(() => {
    const storedBandName = localStorage.getItem("bandName");
    if (!storedBandName) {
      navigate("/game/start");
    } else {
      setBandName(storedBandName);

      // Initialize practiceCount from local storage or default to 0
      const storedPracticeCount = localStorage.getItem("practiceCount");
      if (storedPracticeCount) {
        setPracticeCount(parseInt(storedPracticeCount, 10));
      } else {
        setPracticeCount(0);
      }

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
  }, [navigate, money, cred]);

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

  const retroButtonStyle = {
    padding: "10px 20px",
    fontFamily: "Courier New, monospace",
    fontSize: "18px", // Increased font size
    background: "linear-gradient(to bottom, #FFA7D1, #B19CD9)", // Pastel pink and purple gradient background
    color: "#311C87", // Darker text color
    border: "none",
    borderRadius: "15px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const retroStatsStyle = {
    background: "linear-gradient(to bottom, #FFA7D1, #B19CD9)", // Background matches the button style
    color: "#311C87", // Darker text color
    padding: "10px",
    borderRadius: "15px",
    marginTop: "10px",
    fontFamily: "Courier New, monospace",
    display: "flex",
    justifyContent: "space-around", // Evenly space out all the stats, including edges
    alignItems: "center",
    gap: "20px", // Increased spacing between stats
    fontSize: "18px", // Increased font size
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Darker, thicker border
  };

  const retroStatItemStyle = {
    marginRight: "10px", // Add some spacing between stats
  };

  const handleMediaEventsClick = () => {
    navigate(`/game/mediaEvent/${bandName}`);
  };

  const handleConcertsClick = () => {
    if (practiceDone || practiceCount > 0) {
      // Reset practiceDone and practiceCount
      setPracticeDone(false);
      setPracticeCount(0);

      // Remove practiceCount from local storage
      localStorage.removeItem("practiceCount");

      navigate(`/game/concert/${bandName}`);
    } else {
      setShowConcertAlert(true); // Show the concert alert
    }
  };

  const handlePracticeClick = () => {
    if (practiceCount < 3) {
      // Set practiceDone to true when practice is done
      setPracticeDone(true);
      setPracticeCount((prevCount) => prevCount + 1);

      // Store the updated practiceCount in local storage
      localStorage.setItem("practiceCount", practiceCount + 1);

      navigate(`/game/practice/${bandName}`);
    } else {
      setShowPracticeAlert(true); // Show the practice alert
    }
  };


  const practiceMult = parseFloat(localStorage.getItem("practiceMult")) || 0;

  return (
    <div className="bg-gray-900 scroll-smooth">
      <div style={containerStyle} className="text-center">
        <img
          src={`${imageFolderPath}/rock.png`}
          alt="title"
          className="mx-auto"
          style={{ width: "20%" }} // Adjust the width as needed
        />
        <h1 className="text-4xl my-6 text-white font-pixel">
          Highway to Harmony
        </h1>
        <div className="mb-3">
          <div style={retroStatsStyle}>
            <h2 style={retroStatItemStyle}>
              <h1>BAND NAME: {bandName}</h1>
            </h2>
            <h3 style={retroStatItemStyle}>
              <h1>CASH: ${money}</h1>
            </h3>
            <h3 style={retroStatItemStyle}>
              <h1>CRED: {cred}</h1>
            </h3>
            <h3 style={retroStatItemStyle}>
            <h1>CONCERT MULTIPLIER: {practiceMult}</h1>
          </h3>
          </div>
          <ul className="flex flex-wrap">
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
                  <h5 className="card-title">
                    <h1>{bandMember.members}</h1>
                  </h5>
                  <p className="card-text">
                    <h1>{bandMember.type}</h1>
                  </p>
                  <p className="card-text">
                    <h1>{bandMember.archetype}</h1>
                  </p>

                  {/* Member ID is hidden */}
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div style={buttonContainerStyle}>
          <button style={retroButtonStyle} onClick={handlePracticeClick}>
            <h1>Band Practice</h1>
          </button>
          <button style={retroButtonStyle} onClick={handleMediaEventsClick}>
            <h1> Media Events</h1>
          </button>
          <button style={retroButtonStyle} onClick={handleConcertsClick}>
            <h1> Concerts and Gigs</h1>
          </button>
        </div>
      </div>
      <CustomAlert
        isOpen={showPracticeAlert}
        message="You can only practice up to three times. It's time to go to a concert!"
        onClose={() => setShowPracticeAlert(false)}
      />
      <CustomAlert
        isOpen={showConcertAlert}
        message="Woah Tiger! We gotta get some practice in before jumping on stage."
        onClose={() => setShowConcertAlert(false)}
      />
    </div>
  );
}



