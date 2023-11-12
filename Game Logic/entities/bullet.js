class Bullet extends GameObject{

    constructor(x, y, width, height, color){
        super(x, y, width, height, color);
        this.speed = bullet_speed;
    }

    display(){
        fill(this.color);
        noStroke();
        rect(this.x, this.y, this.width, this.height);
    }

    update(){
        this.movement();
    }

    movement(){
        this.y -= this.speed;
    }
}