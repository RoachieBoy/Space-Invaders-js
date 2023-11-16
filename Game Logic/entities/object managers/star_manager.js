class StarManager extends ObjectPool {
  constructor (poolSize) {
    super (poolSize, Star, [0, 0, 1, 1, 'white']);
    this.spawnStars ();
  }

  /**
   * Spawns the stars in the pool
   */
  spawnStars () {
    this.objects.forEach (star => {
      star.x = Math.random () * canvas_size.width;
      star.y = Math.random () * canvas_size.height;
      star.inUse = true;
      this.objectsInUse.push (star);
    });
  }

  updateObjects () {
    super.updateObjects ();

    this.resetStarPosition ();
  }

  /**
   * Resets the star position if it is out of bounds
   */
  resetStarPosition () {
    this.objectsInUse.forEach (star => {
      if (star.y < 0) {
        star.x = Math.random () * canvas_size.width;
        star.y = canvas_size.height + star.height;
      }
      if (star.x > canvas_size.width) {
        star.x = 0;
        star.y = Math.random () * canvas_size.height;
      }
    });
  }
}
