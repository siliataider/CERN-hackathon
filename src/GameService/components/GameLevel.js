import React, { useRef } from 'react';
import Player from '../../Player/Player';
import Physicist from './Physicist'
import TileMap from '../../Tiles/TileMap';
import "./GameLevel.css"
import TileService from "../../Tiles/TileService";
import CameraService from '../CameraService';

const GameLevel = ({ levelConfiguration, tileMap , character, directionImage}) => {
  const { map, physicist, startPos, endPos } = levelConfiguration;

  const svgRef = useRef();

  // logic to render the game level based on the provided levelConfiguration
  const viewBoxWidth = TileService.tileSize * CameraService.sideLength;
  const startCoords = {
    x: (startPos[1] + 0.5) * TileService.tileSize, 
    y: (startPos[0] + 0.5) * TileService.tileSize
  }

  return (
    <svg className="game-panel" ref={svgRef} viewBox={`${startCoords.x - viewBoxWidth/2} ${startCoords.y - viewBoxWidth/2} ${viewBoxWidth} ${viewBoxWidth}`}>
      {/* use the map array to render the tiles.. just an example */}
      <TileMap tileMap={tileMap} />

      {/* render the player using startPos */}
      <Player svg={svgRef} startPos={startCoords} character={character} directionImage={directionImage}/>

      <Physicist {...physicist}/>
      
    </svg>
  );
};

export default GameLevel;