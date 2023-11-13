class Enemy extends GameObject{
    constructor(x, y, width, height, color, speed, points) {
        super(x, y, width, height, color);
        this.speed = speed;
        this.direction = 1;
        this.alive = true;
        this.points = points;
    }

    display() {
        fill(this.color);
        noStroke();
        rect(this.x, this.y, this.width, this.height);
    }

    movement() {
        this.x += this.speed * this.direction;
    }
}