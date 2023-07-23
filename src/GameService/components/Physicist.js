import TileService from "../../Tiles/TileService";
import PhysicistImage from "../../images/physicist.png"

const Physicist = params => {
    return <g transform={`translate(${(params.startPos[1] + 0.5) * TileService.tileSize}, ${(params.startPos[0] + 0.5) * TileService.tileSize}) rotate(${params.rotation})`}>
        <image 
            href={PhysicistImage} 
            width={TileService.tileSize/2} 
            height={TileService.tileSize/2} 
            style={{transform: `translate(${-TileService.tileSize/4}px, ${-TileService.tileSize/4}px)`}}/>
    </g>
}

export default Physicist;