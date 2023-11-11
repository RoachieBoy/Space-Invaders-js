class Player extends GameObject{
    constructor(){
        super();
        this.x = 50;
        this.y = 50;
        this.width = 50;
        this.height = 50;
        this.color = color(255, 0, 0);
        this.speed = 5;
    }

    /**
     * Draws the object to the canvas
     */
    display(){
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
    }

    /**
     * Updates the object
     */
    update(){
        this.movement();
    }

    movement(){
        if(keyIsDown(LEFT_ARROW)){
            this.x -= this.speed;
        }
        if(keyIsDown(RIGHT_ARROW)){
            this.x += this.speed;
        }
        if(keyIsDown(UP_ARROW)){
            this.y -= this.speed;
        }
        if(keyIsDown(DOWN_ARROW)){
            this.y += this.speed;
        }
    }
}