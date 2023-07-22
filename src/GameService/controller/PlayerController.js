export default class PlayerController {
    moveSpeed = 2;
    shutterSpeed = 20;
    switchImageInterval = 15; // Adjust this value to control the frequency of image switching
    imageSwitchTimer = null;
  
    constructor() {
      this.player = null;
      this.direction = { x: 0, y: 0 };
      this.position = { x: 0, y: 0 };
      this.directionImage = "standing";
      
  
      document.addEventListener("keydown", (e) => this.keyPressed(e));
      document.addEventListener("keyup", (e) => this.keyReleased(e));
    }
  
    getInstance() {
      if (!this.instance) this.instance = new PlayerController();
      return this.instance;
    }
  
    start() {
      setInterval(() => this.move(), this.shutterSpeed);
    }
  
    stop() {
      clearInterval(() => this.move());
      // Clear the image switch timer when stopping the movement
      clearInterval(this.imageSwitchTimer);
    }
  
    getPlayer() {
      if (!this.player) this.player = document.getElementById("player");
      return this.player;
    }
  
    updateDirection(deltaDirection) {
      this.direction.x += deltaDirection.x;
      this.direction.y += deltaDirection.y;
    }
  
    move() {
      if (this.direction.x === 0 && this.direction.y === 0) return;
  
      const newPosition = {
        x: this.position.x + this.direction.x * this.moveSpeed,
        y: this.position.y + this.direction.y * this.moveSpeed,
      };
  
      if (this.playerService.isValidPosition(newPosition)) {
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
  
        const player = this.getPlayer();
        if (player) player.setAttribute("transform", `translate(${newPosition.x}, ${newPosition.y})`);
      }
  
      // Clear the previous timer to avoid multiple timers running simultaneously
      clearInterval(this.imageSwitchTimer);
  
      // Start a new timer to switch the image periodically
      this.imageSwitchTimer = setInterval(() => {
        this.directionImage = this.directionImage === "up" ? "down" : "up";
        const player = this.getPlayer();
        if (player) {
          player.setAttribute("href", require(`../../images/character-${this.directionImage}.png`));
          console.log(`../../images/character-${this.directionImage}.png`)
        }
      }, this.switchImageInterval);
    }
  
    keyPressed(e) {
      switch (e.key) {
        case "ArrowUp":
          if (!this.keyPressed.upPressed) {
            this.updateDirection({ x: 0, y: -1 });
            this.keyPressed.upPressed = true;
          }
          break;
  
        case "ArrowRight":
          if (!this.keyPressed.rightPressed) {
            this.updateDirection({ x: 1, y: 0 });
            this.keyPressed.rightPressed = true;
          }
          break;
  
        case "ArrowDown":
          if (!this.keyPressed.downPressed) {
            this.updateDirection({ x: 0, y: 1 });
            this.keyPressed.downPressed = true;
          }
          break;
  
        case "ArrowLeft":
          if (!this.keyPressed.leftPressed) {
            this.updateDirection({ x: -1, y: 0 });
            this.keyPressed.leftPressed = true;
          }
          break;
      }
    }
  
    keyReleased(e) {
      switch (e.key) {
        case "ArrowUp":
          this.updateDirection({ x: 0, y: 1 });
          this.keyPressed.upPressed = false;
          break;
  
        case "ArrowRight":
          this.updateDirection({ x: -1, y: 0 });
          this.keyPressed.rightPressed = false;
          break;
  
        case "ArrowDown":
          this.updateDirection({ x: 0, y: -1 });
          this.keyPressed.downPressed = false;
          break;
  
        case "ArrowLeft":
          this.updateDirection({ x: 1, y: 0 });
          this.keyPressed.leftPressed = false;
          break;
      }
  
      // Clear the image switch timer when the key is released
      clearInterval(this.imageSwitchTimer);
    }
  }