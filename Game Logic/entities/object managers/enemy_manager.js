class EnemyManager extends ObjectPool {
  constructor (enemyPoolSize, bulletManager) {
    super (enemyPoolSize, Enemy, [
      enemy_starting_position.x,
      enemy_starting_position.y,
      enemy_width,
      enemy_height,
      enemy_color,
      enemy_points,
    ]);

    this.bulletManager = bulletManager;

    // spawns the enemies in a grid like pattern on the screen
    this.spawnEnemies (enemy_rows, enemy_columns);
  }

  /**
     * Spawn enemies in a grid like pattern on the screen
     * @param {*} rows the number of rows of enemies
     * @param {*} columns the number of columns of enemies
     */
  spawnEnemies (rows = 5, columns = 11) {
    const spacing = {
      x_spacing: (canvas_size.width - enemies_x_spacing_correction) / columns,
      y_spacing: canvas_size.height / 2 / rows,
    };

    const totalEnemies = rows * columns;

    for (let i = 0; i < totalEnemies; i++) {
      const enemy = this.objects[i];

      enemy.x = enemies_origin.x + i % columns * spacing.x_spacing;
      enemy.y = enemies_origin.y + Math.floor (i / columns) * spacing.y_spacing;

      enemy.inUse = true;

      this.objectsInUse.push (enemy);
    }
  }

  /**
     * Displays the in use enemies in the pool & updates them
     */
  updateObjects () {
    super.updateObjects ();
    this.bulletCollisions ();

    const enemiesAtEdge = this.objectsInUse.some (enemy =>
      CollisionHelper.checkCanvasCollision (enemy, screen)
    );

    if (enemiesAtEdge) {
      this.objectsInUse.forEach (enemy => {
        enemy.shiftDown ();
      });
    }
  }

  /**
     * Checks for collisions between bullets and enemies
     */
  bulletCollisions () {
    let hitEnemies = [];

    // iterate through all the enemies and bullets and check for collisions
    this.objectsInUse.forEach (enemy => {
      this.bulletManager.objectsInUse.forEach (bullet => {
        if (CollisionHelper.checkRectCollision (enemy, bullet)) {
          enemy.hit = true;
          hitEnemies.push (enemy);
          this.bulletManager.removeObjectAtIndex (bullet);
        }
      });
    });

    hitEnemies.forEach (enemy => {
      enemy.kill ();
      this.removeObjectAtIndex (enemy);
    });
  }
}
