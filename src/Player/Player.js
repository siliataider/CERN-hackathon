import React, { useState, useEffect } from "react";
import TileService from "../Tiles/TileService";

function vectorToAngle(x, y) {
    const radians = Math.atan2(y, x);
    let angle = radians * (180 / Math.PI);
  
    // Convert negative angles to positive equivalent
    if (angle < 0) {
      angle = 360 + angle;
    }
  
    return angle;
  }

const getDirection = (up, left, down, right) => {
    let vertical = down - up;
    let horizontal = right - left;
    return vectorToAngle(horizontal, vertical);
}

const Player = params => {

    const [isRunning, setIsRunning] = useState(false);
    const [leftFoot, setLeftFoot] = useState(true);
    const [angle, setAngle] = useState(0);

    const handleSwitchFeet = () => {
        if(isRunning) setLeftFoot(f => !f);
    }

    const recalculateAngle = () => {
        let newangle = getDirection(
            handleKeyDown.upPressed,
            handleKeyDown.leftPressed,
            handleKeyDown.downPressed,
            handleKeyDown.rightPressed
        );
        setAngle(newangle + 90);
    }

    const handleKeyDown = (e) => {
        switch(e.key){
            case "ArrowUp":
                handleKeyDown.upPressed = true;
                setIsRunning(true);
                break;
            case "ArrowLeft":
                handleKeyDown.leftPressed = true;
                setIsRunning(true);
                break;
            case "ArrowRight":
                handleKeyDown.rightPressed = true;
                setIsRunning(true);
                break;
            case "ArrowDown":
                handleKeyDown.downPressed = true;
                setIsRunning(true);
                break;
        }
        recalculateAngle();
    }
    handleKeyDown.upPressed = false;
    handleKeyDown.leftPressed = false;
    handleKeyDown.rightPressed = false;
    handleKeyDown.downPressed = false;

    const everythingUp = () =>
        !handleKeyDown.upPressed &&
        !handleKeyDown.leftPressed &&
        !handleKeyDown.rightPressed &&
        !handleKeyDown.downPressed 

    const handleKeyUp = (e) => {
        switch(e.key){
            case "ArrowUp":
                handleKeyDown.upPressed = false;
                if(everythingUp()) setIsRunning(false);
                break;
            case "ArrowLeft":
                handleKeyDown.leftPressed = false;
                if(everythingUp()) setIsRunning(false);
                break;
            case "ArrowRight":
                handleKeyDown.rightPressed = false;
                if(everythingUp()) setIsRunning(false);
                break;
            case "ArrowDown":
                handleKeyDown.downPressed = false;
                if(everythingUp()) setIsRunning(false);
                break;
        }
        recalculateAngle();
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);

        let intervalId = setInterval(handleSwitchFeet, 200);

        return () => {
            document.addEventListener("keydown", handleKeyDown);
            document.addEventListener("keyup", handleKeyUp);
            clearInterval(intervalId);
        }

    }, [isRunning, setIsRunning]);

    let character = isRunning ? (leftFoot ? params.character.right : params.character.left) : params.character.standing;
    return <g id="player" transform={`translate(${params.startPos.x}, ${params.startPos.y})`}>
        <image 
            href={character} 
            width={TileService.tileSize/2} 
            height={TileService.tileSize/2} 
            style={{
                transform: `translate(${-TileService.tileSize/4}px, ${-TileService.tileSize/4}px) rotate(${angle}deg)`,
                transformOrigin: `${TileService.tileSize / 4}px ${TileService.tileSize / 4}px`
            }}/>
    </g>
}

export default Player;