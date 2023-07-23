import Wall from "../images2/wall.png";
import Floor from "../images/walk.png";
import Start from "../images/start.png";
import End from "../images/end.png";
import HorizontalPipe1 from "../images/horizontalpipe1.png";
import HorizontalPipe2 from "../images/horizontalpipe2.png";
import BluePipe1Vertical from "../images/bluepipe1Vertical.png";
import BluePipe2Vertical from "../images/bluepipe2Vertical.png";
import WallBottom from "../images/wall-shadow.png";

const TileTypes = [
    {id: 1, type: "Floor", walkable: true, image: Floor},
    {id: 2, type: "Floor Start", walkable: true, image: Start},
    {id: 3, type: "Floor End", walkable: true, image: End},
    {id: 4, type: "Horizontal Pipe 1", walkable: true, image: HorizontalPipe1},
    {id: 5, type: "Horizontal Pipe 2", walkable: true, image: HorizontalPipe2},
    {id: 6, type: "Blue Pipe 1 Vertical", walkable: true, image: BluePipe1Vertical},
    {id: 7, type: "Blue Pipe 2 Vertical", walkable: true, image: BluePipe2Vertical},
    {id: 0, type: "Wall", walkable: false,  image: Wall},
    {id: 9, type: "Wall Bottom", walkable: false, image: WallBottom},
]

/*
import Wall from "../images2/wall.png";
import Floor from "../images2/floor.png";
import FullRedPipe from "../images2/floor-left-full-red-pipe.png";
import TopEndRedPipe from "../images2/floor-left-topend-red-pipe.png";
import BottomEndRedPipe from "../images2/floor-left-bottomend-red-pipe.png";
import FullGreenPipe from "../images2/floor-top-full-green-pipe.png";
import LeftEndGreenPipe from "../images2/floor-top-leftend-green-pipe.png";
import RightEndGreenPipe from "../images2/floor-top-rightend-green-pipe.png";
import LeftWires from "../images2/floor-left-wire.png";
import HorizontalWires from "../images2/floor-horizontal-wire.png";
import WallTopRight from "../images2/wall-top-right.png";
import WallRight from "../images2/wall-right.png";
import WallBottomRight from "../images2/wall-bottom-right.png";
import WallBottom from "../images2/wall-bottom.png";
import WallBottomLeft from "../images2/wall-bottom-left.png";
import WallLeft from "../images2/wall-left.png";
import WallTopLeft from "../images2/wall-top-left.png";
import WallTop from "../images2/wall-top.png";


const TileTypes = [
    {id: 1, type: "Floor", walkable: true, image: Floor},
    {id: 2, type: "Floor Red Pipe", walkable: true, image: FullRedPipe},
    {id: 3, type: "Floor TopEnd Red Pipe", walkable: true, image: TopEndRedPipe},
    {id: 4, type: "Floor BottomEnd Red Pipe", walkable: true, image: BottomEndRedPipe},
    {id: 5, type: "Floor Green Pipe", walkable: true, image: FullGreenPipe},
    {id: 6, type: "Floor LeftEnd Green Pipe", walkable: true, image: LeftEndGreenPipe},
    {id: 7, type: "Floor RightEnd Green Pipe", walkable: true, image: RightEndGreenPipe},
    {id: 8, type: "Floor Left Wire", walkable: true, image: LeftWires},
    {id: 9, type: "Floor Top Wire", walkable: true, image: HorizontalWires},
    {id: 0, type: "Wall", walkable: false,  image: Wall},
    {id: 10, type: "Wall Top Right", walkable: false, image: WallTopRight},
    {id: 11, type: "Wall Right", walkable: false, image: WallRight},
    {id: 12, type: "Wall Bottom Right", walkable: false, image: WallBottomRight},
    {id: 13, type: "Wall Bottom", walkable: false, image: WallBottom},
    {id: 14, type: "Wall Bottom Left", walkable: false, image: WallBottomLeft},
    {id: 15, type: "Wall Left", walkable: false, image: WallLeft},
    {id: 16, type: "Wall Top Left", walkable: false, image: WallTopLeft},
    {id: 17, type: "Wall Top", walkable: false, image: WallTop},
]
*/

export default TileTypes;
