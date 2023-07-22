import React from 'react';
import Tile from './Tile';
import Player from './Player';
import TileMap from './TileMap';

const GameLevel = ({ levelConfiguration, tileMap, directionImage }) => {
  const { map, physicist, startPos, endPos } = levelConfiguration;

  // logic to render the game level based on the provided levelConfiguration

  return (
    <svg width="500" height="300">
      {/* use the map array to render the tiles.. just an example */}
      <TileMap tileMap={tileMap} />

      {/* render the player using startPos and pass the directionImage */}
      <Player startPos={startPos} directionImage={directionImage} />
    </svg>
  );
};

export default GameLevel;
