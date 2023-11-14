class StartGameState extends GameState {
  enter () {
    InputHelper.eventSubscriptions ();
  }

  update () {
    background (bg_color);
    fill (start_text_color);
    textSize (start_text_size);
    text (start_text, width / 2 - start_text_width_correction, height / 2);

    // register event lisener for the enter key
    if (InputHelper.keys['Enter']) {
      gameStateManager.setState (game_states.playing);
    }
  }

  exit () {
    InputHelper.unsubscribeAll ();
  }
}
