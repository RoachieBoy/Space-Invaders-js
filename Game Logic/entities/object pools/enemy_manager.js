class EnemyManager {
  constructor (enemyPoolSize) {
    this.enemyPoolSize = enemyPoolSize;
    this.enemiesInUse = [];

    this.enemies = Array.from (
      {length: this.enemyPoolSize},
      () =>
        new Enemy (
          enemy_starting_position.x,
          enemy_starting_position.y,
          enemy_width,
          enemy_height,
          enemy_color,
          enemy_points
        )
    );

    this.enemies.forEach (enemy => (enemy.inUse = false));
  }

  /**
     * Spawns enemies from the pool in a grid like pattern on the screen 
     * 
     * @param {number} rows - The number of rows of enemies (default: 5)
     * @param {number} columns - The number of columns of enemies (default: 11)
     */
  spawnEnemies (rows = 5, columns = 11) {
    const spacing = {
      x_spacing: (canvas_size.width - enemies_x_spacing_correction) / columns,
      y_spacing: canvas_size.height / 2 / rows,
    };

    const totalEnemies = rows * columns;

    for (let i = 0; i < totalEnemies; i++) {
      const enemy = this.enemies[i];

      enemy.x = enemies_origin.x + i % columns * spacing.x_spacing;
      enemy.y = enemies_origin.y + Math.floor (i / columns) * spacing.y_spacing;

      enemy.inUse = true;

      this.enemiesInUse.push (enemy);
    }
  }

  /**
 *  Updates the enemies in the enemies in use array 
 */
  updateEnemies () {
    // iterate through the enemies in use array and move them to the right
    this.enemiesInUse.forEach (enemy => enemy.update ());

    // check if the enemy is at the edge of the screen using the collision helper
    const enemiesAtEdge = this.enemiesInUse.some (enemy =>
      CollisionHelper.checkCanvasCollision (enemy, screen)
    );

    // if they are, then move them down and change their direction
    if (enemiesAtEdge) {
      this.enemiesInUse.forEach (enemy => {
        enemy.shiftDown ();
      });
    }
  }
}
