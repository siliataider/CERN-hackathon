import React from "react";
import TileService from "../TileService";
import LeftRun from "../../images/character-left.png";

const Player = params => {
    return <g id="player" transform={`translate(${TileService.tileSize * (params.startPos[1] + 0.5)}, ${TileService.tileSize * (params.startPos[0] + 0.5)})`}>
        <image href={LeftRun} width={TileService.tileSize/2} height={TileService.tileSize/2} style={{transform: `translate(${-TileService.tileSize/4}px, ${-TileService.tileSize/4}px)`}}/>
    </g>
}

export default Player;