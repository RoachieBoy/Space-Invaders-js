class Player extends GameObject{
    constructor(x, y, width, height, color){
        super(x, y, width, height, color);
        this.speed = player_speed;
    }

    display(){
        fill(this.color);
        noStroke();
        rect(this.x, this.y, this.width, this.height);
    }
   
    update(){
        this.movement();
        this.screenCollision();
    }
    
    /**
     *  Checks if the player is colliding with the screen
     * @returns {boolean} - Returns true if the player is colliding with the screen
     */
    screenCollision(){
        const isCollidingWithScreen = CollisionHelper.checkCanvasCollision(this, screen);

        if(!isCollidingWithScreen) return;

        if(this.x < 0) this.x = 0;
        if(this.x + this.width > screen.width) this.x = screen.width - this.width;
    }

    /**
     * Handles the movement of the player based on the key pressed
     */
    movement(){
        if (InputHelper.keys['ArrowLeft'] || InputHelper.keys['ArrowRight']) {
            if (InputHelper.lastKeyPressed === 'ArrowLeft') {
                this.x -= this.speed;
            } else if (InputHelper.lastKeyPressed === 'ArrowRight') {
                this.x += this.speed;
            }
        }
    }
}