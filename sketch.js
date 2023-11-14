let screen;    
let point_values_enemies = [10, 20, 30];
let gameStateManager;

function setup () {
  createCanvas (canvas_size.width, canvas_size.height);

  // this needs to stay here!
  screen = {
    x: 0,
    y: 0,
    width: width,
    height: height,
  };

  gameStateManager = new GameStateManager ();
  registerStates ();
  gameStateManager.setState ('playing');
}

function draw () {
  gameStateManager.update ();
}

function registerStates () {
  gameStateManager.registerState ('playing', new PlayingState (screen));
}
