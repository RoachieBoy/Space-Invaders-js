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
  }

  update () {
    background (bg_color);

    // update all instances of object pools in this state
    this.starManager.updateObjects ();
    this.bulletManager.updateObjects ();
    this.enemyManager.updateObjects ();

    // update the player
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
