// gamepage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import the useParams hook
import levels from '../Tiles/levels';
import GameLevel from '../GameService/components/GameLevel';
import GameService from '../GameService/GameService'
import CameraService from '../GameService/CameraService';
import TestPopUp from '../PopUpService/pop-ups/TestPopUp';
import DialogPopUp from "../PopUpService/pop-ups/Dialog"

const GamePage = ({character}) => {


  const setShowTestPopUp = (show) => {
    const testPopUp = document.getElementById("test-pop-up");
    if(testPopUp.classList.contains("appear")){
      if(!show) testPopUp.classList.remove("appear")
    }
    else if(show) testPopUp.classList.add("appear")
  }
  const setShowDialogPopUp = (show) => {
    const dialogPopUp = document.getElementById("dialog-pop-up");
    if(dialogPopUp.classList.contains("appear")){
      if(!show) dialogPopUp.classList.remove("appear")
    }
    else if(show) dialogPopUp.classList.add("appear")
  }

  const { levelIndex } = useParams(); // Access the levelIndex parameter from the URL
  const parsedLevelIndex = levelIndex ? parseInt(levelIndex, 10) : 0;
  const levelConfiguration = levels[parsedLevelIndex];

  const gameService = GameService.getInstance(parsedLevelIndex);
  gameService.addTileEvent(1, levelConfiguration.endPos, () => {
    setShowTestPopUp(true)
  });
  const tileMap = gameService.start(levelConfiguration, character);

  useEffect(() => {
    gameService.freePlayer(setShowTestPopUp,setShowDialogPopUp);

    return () => {
      gameService.stopPlayer();
    }
  });

  return (<>
    <GameLevel levelConfiguration={levelConfiguration} tileMap={tileMap} character={character}/>
    <TestPopUp setShowPopUp={setShowTestPopUp} levelNumber={levelIndex} />
    <DialogPopUp setShowPopUp={setShowDialogPopUp} levelNumber={levelIndex} />

  </>
      

  );
};

export default GamePage;