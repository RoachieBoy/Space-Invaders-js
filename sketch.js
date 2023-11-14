var screen;    
var gameStateManager;

function setup () {
  createCanvas (canvas_size.width, canvas_size.height);

  // this is defined here because the screen size is not known before setup
  screen = {
    x: 0,
    y: 0,
    width: width,
    height: height,
  };

  // create the game state manager and set the initial state to start
  gameStateManager = new GameStateManager ();
  registerStates ();
  gameStateManager.setState (game_states.start);
}

function draw () {
  gameStateManager.update ();
}

/**
 * Register all game states with the game state manager
 */
function registerStates () {
  gameStateManager.registerState (game_states.start, new StartGameState ());
  gameStateManager.registerState (game_states.playing, new PlayingState (screen));
}
