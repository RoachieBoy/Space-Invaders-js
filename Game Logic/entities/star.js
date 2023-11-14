class Star extends GameObject{
    constructor(x, y, width, height, color){
        super(x, y, width, height, color);
        this.direction = 0;
    }

    display(){
        var randomSize = Math.random() * this.width;

        stroke(this.color);
        strokeWeight(randomSize);
        point(this.x, this.y);
    }

    movement(){
        this.x  += Math.cos(this.direction) * 2;
        this.y  += Math.sin(this.direction) * 2;
    }
}