class Enemy extends GameObject {
  constructor (x, y, width, height, color, points) {
    super (x, y, width, height, color);
    this.speed = enemy_speed; 
    this.direction = 1;
    this.alive = true;
    this.points = points;
    this.hit = false;
  }

  display () {
    fill (this.color);
    noStroke ();
    rect (this.x, this.y, this.width, this.height);
  }

  movement () {
    this.x += this.speed * this.direction;
  }

  /**
     *  Updates the enemy's position down the screen and changes its direction
     */
  shiftDown () {
    this.y += this.height;
    this.direction *= -1;
  }

  /**
     *  Updates the enemy's position
     */
    kill(){

      if (!this.hit) return;

      this.x = remove_enemy_position.x;
      this.y = remove_enemy_position.y;
    }
}
