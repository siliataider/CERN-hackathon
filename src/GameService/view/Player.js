import React from "react";
import TileService from "../TileService";
import LeftRun from "../../images/character-left.png";
import RightRun from "../../images/character-right.png";
import DownRun from "../../images/character-down.png";
import UpRun from "../../images/character-up.png";
import Standing from "../../images/character-standing.png";

const Player = ({ startPos, directionImage }) => {
  let imageUrl;
  switch (directionImage) {
    case "left":
      imageUrl = LeftRun;
      break;
    case "right":
        imageUrl = RightRun;
        break;
    case "down":
      imageUrl = DownRun;
      break;
    case "up":
      imageUrl = UpRun;
      break;
    case "standing":
        imageUrl = Standing;
        break;
    default:
      imageUrl = Standing;
  }

  return (
    <g
      id="player"
      transform={`translate(${TileService.tileSize * (startPos[1] + 0.5)}, ${
        TileService.tileSize * (startPos[0] + 0.5)
      })`}
    >
      <image
        href={imageUrl}
        width={TileService.tileSize / 2}
        height={TileService.tileSize / 2}
        style={{ transform: `translate(${-TileService.tileSize / 4}px, ${-TileService.tileSize / 4}px)` }}
      />
    </g>
  );
};

export default Player;