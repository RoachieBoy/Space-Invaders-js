/**
 * PlayingState - The state where the player plays the game.
 */
class PlayingState extends GameState {
  constructor () {
    super ();

    // bullet manager needs to be initialized before the enemy manager and player
    this.bulletManager = new BulletManager (bullet_pool_size);
    this.enemyManager = new EnemyManager (enemy_pool_size, this.bulletManager);
    this.starManager = new StarManager (star_pool_size);

    this.player = new Player (
      width / 2 - player_width / 2,
      height - player_height,
      player_width,
      player_height,
      player_color,
      this.bulletManager
    );
  }

  enter () {
    InputHelper.eventSubscriptions ();

    this.enemyManager.spawnEnemies ();
    this.starManager.spawnStars ();
  }

  update () {
    background (bg_color);

    InputHelper.eventSubscriptions ();

        // update and display the stars
    this.starManager.stars.forEach (star => star.display ());
    this.starManager.updateStars ();

    // update and display the bullets
    this.bulletManager.bullets.forEach (bullet => bullet.display ());
    this.bulletManager.updateBullets ();


    // update and display the enemies
    this.enemyManager.enemies.forEach (enemy => enemy.display ());
    this.enemyManager.updateEnemies ();


    // update and display the player
    this.player.update ();
    this.player.display ();
  }

  exit () {
    this.bulletManager = null;
    this.enemyManager = null;
    this.starManager = null;
    this.player = null;

    InputHelper.unsubscribeAll ();
  }
}