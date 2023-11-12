class Enemy extends GameObject{
    constructor(x, y, width, height, color, speed) {
        super(x, y, width, height, color);
        this.speed = speed;
        this.direction = 1;
        this.alive = true;
    }
}