/**
 * Bullet manager class for creating a pool of bullets
 */
class BulletManager {
  constructor(bulletPoolSize) {
    this.bulletPoolSize = bulletPoolSize;

    this.bullets = Array.from(
      { length: this.bulletPoolSize },
      () =>
        new Bullet(
          bullet_starting_position.x,
          bullet_starting_position.y,
          bullet_width,
          bullet_height,
          bullet_color
        )
    );

    this.bullets.forEach((bullet) => (bullet.inUse = false));
  }

  /**
   * Shoots a bullet from the pool
   * @param {GameObject} entity - The entity that is shooting the bullet
   */
  shoot(entity) {
    const bullet = this.bullets.find((bullet) => !bullet.inUse);

    if (!bullet) return;

    bullet.x = entity.x + entity.width / 2 - bullet_width / 2;
    bullet.y = entity.y;
    bullet.inUse = true;
  }

  /**
   * Updates the in use bullets in the pool
   */
  updateBullets() {
    this.bullets
      .filter((bullet) => bullet.inUse)
      .forEach((bullet) => {
        bullet.y -= bullet_speed;
        if (bullet.y < -bullet.height) {
          bullet.inUse = false;
        }
      });
  }
}