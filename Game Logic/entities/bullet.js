class Bullet extends GameObject {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
    this.speed = bullet_speed;
  }

  display() {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
  }

  movement() {
    this.y -= this.speed;
  }

  /**
   * Updates the bullet's position off the screen 
   */
  remove() {
    this.x = bullet_starting_position.x;
    this.y = bullet_starting_position.y;
  }
}
