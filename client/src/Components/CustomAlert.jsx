import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Set the root element for accessibility

export default function CustomAlert({ isOpen, message, onClose }) {
  const retroButtonStyle = {
    padding: "10px 20px",
    fontFamily: "Courier New, monospace",
    fontSize: "18px",
    background: "linear-gradient(to bottom, #311C87, #311C87)", // Darker background gradient
    color: "#FFA7D1", // Lighter text color
    border: "2px solid #311C87", // Add an outline
    borderRadius: "15px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const modalStyle = {
    overlay: {
      background: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      background: "linear-gradient(to bottom, #FFA7D1, #B19CD9)",
      color: "#311C87",
      padding: "20px",
      borderRadius: "15px",
      fontFamily: "Courier New, monospace",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      fontSize: "39px", // Adjust the font size here
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      width: "auto",
      maxWidth: "80%",
      margin: "auto",
      top: "30%",
      left: "10%",
      right: "10%",
      bottom: "30%",
      border: "2px solid #311C87",
    },
  };
  const messageStyle = {
    textAlign: "center", // Center-align the message text
    fontSize: "80px", // Adjust the font size here
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Custom Alert"
      style={modalStyle}
    >
      <h1 style={messageStyle}>{message}</h1>
      <button style={retroButtonStyle} onClick={onClose}>
        <h1>Close</h1>
      </button>
    </Modal>
  );
}

