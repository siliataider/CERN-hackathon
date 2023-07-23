import TileService from "../Tiles/TileService";
import PlayerController from "./PlayerController";

export default class PlayerService {
    
    constructor(){
        this.playerController = new PlayerController();
        this.playerController.playerService = this;
    }

    static getInstance(){
        if(!this.instance) this.instance = new PlayerService();
        return this.instance;
    }

    isValidPosition(position){
        const tileService = this.gameService.tileService;
        const tileIndex = tileService.getTileIndex(position);
        if(!tileService.isInsideBounds(tileIndex)) return false;
        return tileService.isWalkable(tileIndex);
    }

    setCharacter(character){
        this.playerController.character = character;
    }

    setStartPosition(config){
        this.playerController.position = {
            x: (config.startPos[1] + 0.5) * TileService.tileSize,
            y: (config.startPos[0] + 0.5) * TileService.tileSize
        }
        this.gameService.cameraService.moveLocation(this.playerController.position);
    }

    start(setShowTestPopUp,setShowDialogPopUp){
        this.playerController.start(setShowTestPopUp, setShowDialogPopUp);
    }

    stop(){
        this.playerController.stop();
    }
}