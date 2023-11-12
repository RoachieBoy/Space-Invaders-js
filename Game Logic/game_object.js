class GameObject {
  constructor(x, y, width, height, color) {
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
  display() {
    throw new Error("display() not implemented");
  }

  /**
   * Updates the object
   * -Simulates an abstract method since JavaScript doesn't have abstract methods
   */
  update() {
    this.movement();
  }

  /**
   * Handles the movement of the object
   * -Simulates an abstract method since JavaScript doesn't have abstract methods
   */
  movement() {
    throw new Error("movement() not implemented");
  }
}