let player;

function setup() {
  createCanvas(canvas_size.width, canvas_size.height);
 
  player = new Player();
}

function draw() {
  background(bg_color);

  player.display();
  player.update();
}
