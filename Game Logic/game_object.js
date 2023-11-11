class GameObject{
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    /**
     * Draws the object to the canvas
     * -Simulates an abstract method since JavaScript doesn't have abstract methods
     */
    display(){
        throw new Error("display() not implemented");
    }

    /**
     * Updates the object
     * -Simulates an abstract method since JavaScript doesn't have abstract methods
     */
    update(){
        throw new Error("update() not implemented");
    }
}