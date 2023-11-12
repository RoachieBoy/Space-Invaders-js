let player;
let screen;

function setup() {
  createCanvas(canvas_size.width, canvas_size.height);
 
  player = new Player(width / 2 - player_width / 2, height - player_height, player_width, player_height, player_color);

  
  screen = {
    x: 0,
    y: 0,
    width: width,
    height: height
  }; 
}

function draw() {
  background(bg_color);

  InputHelper.eventSubscriptions();

  
  player.bullets.forEach(bullet => {
    bullet.display();
    bullet.update();
  });

  player.display();
  player.update();

}
