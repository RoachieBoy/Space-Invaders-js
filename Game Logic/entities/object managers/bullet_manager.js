/**
 * Bullet manager class for creating a pool of bullets
 */
class BulletManager {
  constructor (bulletPoolSize) {
    this.bulletPoolSize = bulletPoolSize;
    this.bulletsInUse = [];

    this.bullets = Array.from (
      {length: this.bulletPoolSize},
      () =>
        new Bullet (
          bullet_starting_position.x,
          bullet_starting_position.y,
          bullet_width,
          bullet_height,
          bullet_color
        )
    );

    this.bullets.forEach (bullet => (bullet.inUse = false));
  }

  /**
   * Shoots a bullet from the pool
   * @param {GameObject} entity - The entity that is shooting the bullet
   */
  shoot (entity) {
    const bullet = this.bullets.find (bullet => !bullet.inUse);

    if (!bullet) return;

    // Set the bullet position to the entity position
    bullet.x = entity.x + entity.width / 2 - bullet_width / 2;
    bullet.y = entity.y;

    bullet.inUse = true;

    this.bulletsInUse.push (bullet);
  }

  /**
   * Displays the in use bullets in the pool
   */
  displayBullets () {
    this.bulletsInUse.forEach (bullet => bullet.display ());
  }

  /**
   * Updates the in use bullets in the pool
   */
  updateBullets () {
    this.displayBullets ();

    // iterate through bullets in use backwards for removal
    // more efficient than iterating through forwards
    for (let i = this.bulletsInUse.length - 1; i >= 0; i--) {
      const bullet = this.bulletsInUse[i];

      // if bullet is out of bounds, remove it from the in use array
      if (bullet.y < -bullet.height) {
        this.bulletsInUse.splice (i, 1);
        bullet.inUse = false;
      } else {
        // only update bullets that are in use
        bullet.update ();
      }
    }
  }
}
