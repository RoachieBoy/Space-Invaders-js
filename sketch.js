let player;
let screen;
let bulletManager;

function setup() {
  createCanvas(canvas_size.width, canvas_size.height);

  bulletManager = new BulletManager(bullet_pool_size);

  player = new Player(
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

function draw() {
  background(bg_color);

  InputHelper.eventSubscriptions();

  bulletManager.bullets.forEach((bullet) => bullet.display());
  bulletManager.updateBullets();

  player.update();
  player.display();
}
