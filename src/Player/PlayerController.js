import Physicist from "../GameService/components/Physicist";

function move(controller,setShowTestPopUp, setShowDialogPopUp){
    if(controller.direction.x === 0 && controller.direction.y === 0) return;

    const newPosition = {
        x: controller.position.x + controller.direction.x * controller.moveSpeed,
        y: controller.position.y + controller.direction.y * controller.moveSpeed
    }

    if(controller.playerService.isValidPosition(newPosition)){
        controller.position.x = newPosition.x;
        controller.position.y = newPosition.y;
    
        const player = controller.getPlayer();
        if(player) player.setAttribute("transform", `translate(${newPosition.x}, ${newPosition.y})`);
        controller.playerService.gameService.cameraService.moveLocation(controller.position);
        
        let tileIndex = controller.playerService.gameService.tileService.getTileIndex(newPosition);
        let endPos = controller.playerService.gameService.levelConfiguration.endPos
        console.log(tileIndex, endPos)
        if((tileIndex.row === endPos[0]) && (tileIndex.col === endPos[1])){
            setShowTestPopUp(true)
        }

        let phyPos = controller.playerService.gameService.levelConfiguration.physicist.startPos;
        if((tileIndex.row === phyPos[0]) && (tileIndex.col === phyPos[1])){
            setShowDialogPopUp(true)
        }
        
    }
}

function keyPressed(e, controller) {
    switch(e.key){
        case "ArrowUp": 
            if(!keyPressed.upPressed){
                controller.updateDirection({x: 0, y: -1});
                keyPressed.upPressed = true;
            }
            break;

        case "ArrowRight": 
            if(!keyPressed.rightPressed){
                controller.updateDirection({x: 1, y: 0});
                keyPressed.rightPressed = true
            }
            break;
        
        case "ArrowDown": 
            if(!keyPressed.downPressed){
                controller.updateDirection({x: 0, y: 1});
                keyPressed.downPressed = true;
            }
            break;

        case "ArrowLeft": 
            if(!keyPressed.leftPressed){
                controller.updateDirection({x: -1, y: 0});
                keyPressed.leftPressed = true;
            }
            break;
    }
}
keyPressed.leftPressed = false;
keyPressed.upPressed = false;
keyPressed.rightPressed = false;
keyPressed.downPressed = false;

function keyReleased(e, controller) {
    switch(e.key){
        case "ArrowUp": 
            controller.updateDirection({x: 0, y: 1});
            keyPressed.upPressed = false;
            break;

        case "ArrowRight": 
            controller.updateDirection({x: -1, y: 0});
            keyPressed.rightPressed = false;
            break;

        case "ArrowDown": 
            controller.updateDirection({x: 0, y: -1});
            keyPressed.downPressed = false;
            break;

        case "ArrowLeft": 
            controller.updateDirection({x: 1, y: 0});
            keyPressed.leftPressed = false;
            break;
    }
}

export default class PlayerController {

    moveSpeed = 1;
    shutterSpeed = 25;

    constructor(){
        this.player = null;
        this.direction = {x: 0, y: 0};
        this.position = {x: 0, y: 0};

        document.addEventListener("keydown", (e) => keyPressed(e, this));
        document.addEventListener("keyup", (e) => keyReleased(e, this));
    }

    getInstance(){
        if(!this.instance) this.instance = new PlayerController();
        return this.instance;
    }

    start(setShowTestPopUp,setShowDialogPopUp){
        setInterval(() => move(this,setShowTestPopUp,setShowDialogPopUp), this.shutterSpeed);
    }

    stop(){
        clearInterval(() => move(this));
    }

    getPlayer(){
        if(!this.player) this.player = document.getElementById("player"); 
        return this.player;
    }

    updateDirection(deltaDirection){
        this.direction.x += deltaDirection.x;
        this.direction.y += deltaDirection.y;
    }
}
