import TileService from "./TileService";
import PlayerController from "./controller/PlayerController";

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

    setStartPosition(config){
        this.playerController.position = {
            x: (config.startPos[1] + 0.5) * TileService.tileSize,
            y: (config.startPos[0] + 0.5) * TileService.tileSize
        }
    }

    start(){
        this.playerController.start();
    }

    stop(){
        this.playerController.stop();
    }
}