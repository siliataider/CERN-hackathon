// gamepage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import the useParams hook
import levels from '../GameService/levels';
import GameLevel from '../GameService/view/GameLevel';
import GameService from '../GameService/GameService'


const GamePage = () => {
  const { levelIndex } = useParams(); // Access the levelIndex parameter from the URL
  const parsedLevelIndex = levelIndex ? parseInt(levelIndex, 10) : 0;
  const levelConfiguration = levels[parsedLevelIndex];

  const gameService = GameService.getInstance();
  const tileMap = gameService.start(levelConfiguration);

  useEffect(() => {
    gameService.freePlayer();

    return () => {
      gameService.stopPlayer();
    }
  });

  return (
    <div>
      <h1>Welcome to Level {parsedLevelIndex}</h1>
      <GameLevel levelConfiguration={levelConfiguration} tileMap={tileMap}/>
    </div>
  );
};

export default GamePage;
