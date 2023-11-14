class Star extends GameObject{
    constructor(x, y, width, height, color){
        super(x, y, width, height, color);
        this.speed = star_speed; 
    }

    display(){
        stroke(this.color);
        strokeWeight(this.width);
        point(this.x, this.y);
    }

    movement(){
        this.y -= this.speed;
        this.x += this.speed;
    }
}