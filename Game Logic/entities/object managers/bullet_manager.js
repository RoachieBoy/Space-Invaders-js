class BulletManager extends ObjectPool {
  constructor (bulletPoolSize) {
    super (bulletPoolSize, Bullet, [
      bullet_starting_position.x,
      bullet_starting_position.y,
      bullet_width,
      bullet_height,
      bullet_color,
    ]);
  }

  /**
   * Shoots a bullet from a given entity
   * @param {*} entity the entity to shoot from
   */
  shoot (entity) {
    const bullet = this.objects.find (bullet => !bullet.inUse);

    if (!bullet) return;

    // Set the bullet position to the entity position
    bullet.x = entity.x + entity.width / 2 - bullet_width / 2;
    bullet.y = entity.y;

    bullet.inUse = true;

    this.objectsInUse.push (bullet);
  }

  updateObjects () {

    super.updateObjects ();
    
    this.objectsInUse = this.objectsInUse.filter (bullet => {
      if (this.isOutOfBounds (bullet)) {
        bullet.inUse = false;
      }

      return bullet.inUse;
    });
  }

  /**
   * Checks if the bullet is out of bounds
   * @param {*} bullet the bullet to check
   * @returns {boolean} true if the bullet is out of bounds, false otherwise
   * */
  isOutOfBounds (bullet) {
    return bullet.y < -bullet.height;
  }
}
