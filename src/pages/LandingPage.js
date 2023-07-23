// LandingPage.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import the useNavigate hook

import '../css/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate(); // Create a navigate function using the hook

  // Function to handle the "Start Game" button click and navigate to the GamePage
  const handleStartGameClick = () => {
    navigate(`/choose-character`); 
  };

  return (
    <div className="landing-page">
      <div className="content">
        <h1 className="title">What Are We Made Of?</h1>
        <p className="description">
          Welcome on this adventure on the quest of finding the answer to the question:
          <br></br>
          <strong>"What are we made of?"</strong>
          <br></br>
          <br></br>
          The levels will take you through <strong>journey into the history of subatomic physics.</strong> 
          <br></br>
          <br></br>
          Are you ready to embark on this exciting adventure?
        </p>
        {/* Attach the onClick event to the handleStartGameClick function */}
        <button className="start-button" onClick={handleStartGameClick}>Start Game</button>
      </div>
    </div>
  );
};

export default LandingPage;