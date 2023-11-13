class Player extends GameObject {
  constructor(x, y, width, height, color, bulletManager) {
    super(x, y, width, height, color);

    this.speed = player_speed;
    this.acceleration = player_acceleration;
    this.deceleration = player_deceleration;

    this.bulletManager = bulletManager;
    this.lastShotCountdown = 0;
  }

  display() {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
  }

  update() {
    super.update();
    this.screenCollision();
    this.shooting();
  }

  /**
   *  Checks if the player is colliding with the screen
   * @returns {boolean} - Returns true if the player is colliding with the screen
   */
  screenCollision() {
    const isCollidingWithScreen = CollisionHelper.checkCanvasCollision(
      this,
      screen
    );

    if (!isCollidingWithScreen) return;

    // constrain the player to the screen by shifting the player back into the screen
    if (this.x < 0) this.x = 0;
    if (this.x + this.width > screen.width) this.x = screen.width - this.width;
  }


  movement() {
    if (InputHelper.keys["ArrowLeft"] || InputHelper.keys["ArrowRight"]) {
      if (InputHelper.lastKeyPressed === "ArrowLeft") {
        this.x -= this.speed;
      } else if (InputHelper.lastKeyPressed === "ArrowRight") {
        this.x += this.speed;
      }
    }
  }

  /**
   * Handles the shooting of the bullets
   */
  shooting() {
    // when the spacebar is pressed, shoot a bullet if the cooldown has elapsed
    if (
      InputHelper.keys[" "] &&
      Timer.hasCooldownElapsed(this.lastShotCountdown, player_bullet_cooldown)
    ) {
      this.bulletManager.shoot(this);
      // reset the cooldown
      this.lastShotCountdown = Date.now();
    }
  }
}
