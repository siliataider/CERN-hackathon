import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import levels from '../GameService/levels';
import GameLevel from '../GameService/view/GameLevel';
import GameService from '../GameService/GameService';

const GamePage = () => {
  const { levelIndex } = useParams();
  const parsedLevelIndex = levelIndex ? parseInt(levelIndex, 10) : 0;
  const levelConfiguration = levels[parsedLevelIndex];

  const gameService = GameService.getInstance();

  // Use useState to handle dynamic changes in player's position and direction
  const [tileMap, setTileMap] = useState(() => gameService.start(levelConfiguration));
  const [directionImage, setDirectionImage] = useState("standing"); // Default direction is standing
  const [isUpKeyPressed, setIsUpKeyPressed] = useState(false);
  const [isHorizontalKeyPressed, setIsHorizontalKeyPressed] = useState(false);

  useEffect(() => {
    gameService.freePlayer();

    return () => {
      gameService.stopPlayer();
    };
  }, [gameService]);

  // Function to toggle the directionImage between "up" and "down" continuously
  const toggleVerticalDirectionImage = () => {
    setDirectionImage(prevDirection => (prevDirection === "up" ? "down" : "up"));
  };

  // Function to toggle the directionImage between "right" and "left" continuously
  const toggleHorizontalDirectionImage = () => {
    setDirectionImage(prevDirection => (prevDirection === "right" ? "left" : "right"));
  };

  // Listen for key press events to update the directionImage state
  const handleKeyPress = (e) => {
    switch (e.key) {
      case "ArrowUp":
        setIsUpKeyPressed(true);
        break;
      case "ArrowDown":
        setIsUpKeyPressed(true);
        break;
      case "ArrowRight":
        setIsHorizontalKeyPressed(true);
        break;
      case "ArrowLeft":
        setIsHorizontalKeyPressed(true);
        break;
      default:
        setDirectionImage("standing");
    }
  };

  // Listen for key release events to stop the continuous switching
  const handleKeyRelease = (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      setIsUpKeyPressed(false);
    } else if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      setIsHorizontalKeyPressed(false);
    }
    setTimeout(() => {
      setDirectionImage("standing");
    }, 100);
  };

  // Attach key press and release event listeners
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("keyup", handleKeyRelease);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("keyup", handleKeyRelease);
    };
  }, []);

  // Start the interval to toggle the directionImage when "ArrowUp" or "ArrowDown" key is pressed
  useEffect(() => {
    let verticalIntervalId;
    let horizontalIntervalId;

    if (isUpKeyPressed) {
      verticalIntervalId = setInterval(toggleVerticalDirectionImage, 100);
    }

    if (isHorizontalKeyPressed) {
      horizontalIntervalId = setInterval(toggleHorizontalDirectionImage, 100);
    }

    return () => {
      clearInterval(verticalIntervalId);
      clearInterval(horizontalIntervalId);
    };
  }, [isUpKeyPressed, isHorizontalKeyPressed]);

  return (
    <div>
      <h1>Welcome to Level {parsedLevelIndex}</h1>
      {/* Pass the directionImage state to the GameLevel component */}
      <GameLevel levelConfiguration={levelConfiguration} tileMap={tileMap} directionImage={directionImage} />
    </div>
  );
};

export default GamePage;
