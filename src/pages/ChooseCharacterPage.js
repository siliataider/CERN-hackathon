import React, { useState } from 'react';
import './ChooseCharacter.css';
import { allCharacters } from './constants';
import { useNavigate } from 'react-router-dom';

const ChooseCharacterPage = ({ setCharacter }) => {
  const navigate = useNavigate();

  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(null);

  const selectCharacter = (index) => {
    setSelectedCharacterIndex(index);
    setCharacter(Object.values(allCharacters)[index]); // Set the selected character using Object.values
  };

  const StartGame = () => {
    if (selectedCharacterIndex == null) {
      setCharacter(allCharacters.characterImage1); // Set the default character if none selected
    }
    navigate(`/game/0`);
  };

  return (
    <div className="character-container">
      <h2>Choose Your Character</h2>
      <div className="character-list">
        {Object.entries(allCharacters).map(([characterName, characterImages], index) => (
          <div
            key={index}
            className={`character-item ${selectedCharacterIndex === index ? 'selected' : ''}`}
            onClick={() => selectCharacter(index)}
          >
            <img src={characterImages.standing} alt={`Character ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="start-game-button" onClick={StartGame}>
        Start Game
      </button>
    </div>
  );
};

export default ChooseCharacterPage;
