let player;
let screen;

function setup() {
  createCanvas(canvas_size.width, canvas_size.height);
 
  player = new Player(canvas_size.width/2, canvas_size.height - 20, 100, 20, "red");
 

  screen = {
    x: 0,
    y: 0,
    width: width,
    height: height
  }; 
}

function draw() {
  background(bg_color);

  player.display();
  player.update();
}
