// EndPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/EndPage.css'; // Import the CSS for the EndPage

const EndPage = () => {
  return (
    <div className="end-page">
      <div className="content">
        <h1 className="title">Congratulations!</h1>
        <p className="description">
          You have completed the journey into the history of subatomic physics!
          <br />
          <br />
          Thank you for playing the game and exploring the mysteries of the universe with us.
        </p>
        <Link to="/" className="start-button">Play Again</Link>
      </div>
    </div>
  );
};

export default EndPage;
