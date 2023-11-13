let player;
let screen;

let bulletManager;

let enemyManager;
let enemies = [];
let point_values_enemies = [10, 20, 30];

function setup () {
  createCanvas (canvas_size.width, canvas_size.height);

  bulletManager = new BulletManager (bullet_pool_size);
  enemyManager = new EnemyManager (enemy_pool_size);

  enemyManager.spawnEnemies ();

  player = new Player (
    width / 2 - player_width / 2,
    height - player_height,
    player_width,
    player_height,
    player_color,
    bulletManager
  );

  screen = {
    x: 0,
    y: 0,
    width: width,
    height: height,
  };
}

function draw () {
  background (bg_color);

  InputHelper.eventSubscriptions ();

  bulletManager.bullets.forEach (bullet => bullet.display ());
  bulletManager.updateBullets ();

  enemyManager.enemies.forEach (enemy => enemy.display ());
  enemyManager.updateEnemies ();

  player.update ();
  player.display ();
}
