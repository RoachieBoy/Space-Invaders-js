class Player extends GameObject{
    constructor(x, y, width, height, color){
        super(x, y, width, height, color);
        this.speed = player_speed;

        this.bullets = [];
        this.firingCooldown = 250;
        this.lastShotCountdown = 0;
    }

    display(){
        fill(this.color);
        noStroke();
        rect(this.x, this.y, this.width, this.height);
    }
   
    update(){
        this.movement();
        this.screenCollision();

        if (InputHelper.keys[' '] && Timer.hasCooldownElapsed(this.lastShotCountdown, this.firingCooldown)) {
            this.shoot();
        }
    }
    
    /**
     *  Checks if the player is colliding with the screen
     * @returns {boolean} - Returns true if the player is colliding with the screen
     */
    screenCollision(){
        const isCollidingWithScreen = CollisionHelper.checkCanvasCollision(this, screen);

        if(!isCollidingWithScreen) return;

        // constrain the player to the screen by shifting the player back into the screen
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

    /**
     *  Shoots a bullet from the player
     */
    shoot(){
        const bullet = new Bullet(
            this.x + this.width / 2 - bullet_width / 2, 
            this.y, 
            bullet_width, 
            bullet_height, 
            bullet_color
            );

        this.bullets.push(bullet);
        this.lastShotCountdown = Date.now();
    }
}