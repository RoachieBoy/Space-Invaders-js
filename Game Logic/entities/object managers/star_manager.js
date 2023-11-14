class StarManager {
  constructor (poolSize) {
    this.poolSize = poolSize;
    this.stars = [];

    this.spawnStars ();
  }

  /**
   * Spawns stars from the pool in random positions on the screen
   */
  spawnStars () {
    for (let i = 0; i < this.poolSize; i++) {
      let size = Math.random () * 1.5;
      this.stars.push (
        new Star (
          Math.random () * canvas_size.width,
          Math.random () * canvas_size.height,
          size,
          size,
          'white'
        )
      );
    }
  }

  /**
   * Updates the stars in the stars in use array
   */
  updateStars () {
    this.displayStars ();

    this.stars.forEach (star => star.update ());

    this.resetStarPosition ();
  }

  /**
   * Displays the stars in the stars in use array
   */
  displayStars () {
    this.stars.forEach (star => star.display ());
  }

  /**
   * Resets the star position if it goes out of bounds
   */
  resetStarPosition () {
    this.stars.forEach (star => {
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
