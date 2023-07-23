import CameraService from "./CameraService";
import PlayerService from "../Player/PlayerService";
import TileService from "../Tiles/TileService";
import { Event } from "../Tiles/Events";

export default class GameService {
    constructor(level){
        this.level = level;
        this.playerService = PlayerService.getInstance();
        this.tileService = TileService.getInstance();
        this.cameraService = CameraService.getInstance();
        this.playerService.gameService = this;
        this.tileService.gameService = this;
        this.cameraService.gameService = this;
        this.events = [];
        this.triggeredEvents = [];
        
        this.gameStarted = false;
    }

    static getInstance(level){
        if(!this.instance) this.instance = new GameService(level);
        return this.instance;
    }

    triggerEvent(position){
        const equal = (a, b) => a.row === b[0] && a.col === b[1];
        for(let event of this.events){
            if(equal(position, event.position)){
                if(!this.triggeredEvents.find(id => id === event.id)){

                    this.triggeredEvents.push(event.id);
                    event.execute();
                }
            }
        }
    }

    addTileEvent(id, tileIndex, action){
        this.events.push(new Event(id, tileIndex, action));
    }

    start(levelConfiguration, character){
        this.levelConfiguration = levelConfiguration;
        this.playerService.setCharacter(character);
        this.playerService.setStartPosition(levelConfiguration);
        let tileMap = this.tileService.applyLevelConfiguration(levelConfiguration);
        this.gameStarted = true;

        return tileMap;
    }

    freePlayer(setShowTestPopUp, setShowDialogPopUp){
        this.playerService.start(setShowTestPopUp, setShowDialogPopUp);
    }

    stopPlayer(){
        this.playerService.stop();
        this.gameStarted = false;
    }
}