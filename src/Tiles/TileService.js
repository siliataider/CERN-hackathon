import PlayerService from "../Player/PlayerService";
import Tile from "./Tile";
import TileTypes from "./TileTypes";

export default class TileService {

    static tileSize = 50;

    static getInstance(){
        if(!this.instance) this.instance = new TileService();
        return this.instance;
    }

    applyLevelConfiguration(levelConfiguration){
        this.levelConfiguration = levelConfiguration;
        return this.getTileMap(this.levelConfiguration.map);
    }

    getTileMap(map){
        let tileMap = [];
        for(let i=0; i<map.length; i++){
            let row = [];
            for(let j=0; j<map[0].length; j++){
                row.push(<Tile key={i + "-" + j} size={TileService.tileSize} type={map[i][j]} x={TileService.tileSize * j} y={TileService.tileSize * i} />);
            }
            tileMap.push(row);
        }
        return tileMap;
    }

    getTileIndex(position){
        return {
            row: Math.floor(position.y / TileService.tileSize),
            col: Math.floor(position.x / TileService.tileSize)
        }
    }

    isWalkable(tileIndex){
        if(!this.levelConfiguration) return true;
        let tileId = this.levelConfiguration.map[tileIndex.row][tileIndex.col]
        let tileType = TileTypes.find(tt => tt.id === tileId);
        return tileType.walkable;
    }

    isInsideBounds(tileIndex){
        let numOfRows = this.levelConfiguration.map.length;
        let numOfCols = this.levelConfiguration.map[0].length;
        return tileIndex.row > -1 && tileIndex.row < numOfRows && tileIndex.col > -1 && tileIndex.col < numOfCols;
    }
}
