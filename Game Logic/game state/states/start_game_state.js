class StartGameState extends GameState {
  constructor () {
    super ();
    this.EnterTextVisible = false;
  }

  enter () {
    InputHelper.eventSubscriptions ();
  }

  update () {
    background (bg_color);
    fill (start_text_color);

    // draw the start text

    textFont (machine_font_bold, start_text_size);

    if (frameCount % 25 === 0) {
      this.EnterTextVisible = !this.EnterTextVisible;
    }

    text (
      start_text,
      width / 2 - start_text_width_correction.x,
      height - start_text_width_correction.y
    );

    // draw the enter text

    if (this.EnterTextVisible) {
      textFont (space_invaders_font, press_enter_text_size);
      text (
        press_enter_text,
        width / 2 - press_enter_text_width_correction.x,
        height - press_enter_text_width_correction.y
      );
    }

    // register event lisener for the enter key
    if (InputHelper.keys['Enter']) {
      gameStateManager.setState (game_states.playing);
    }
  }

  exit () {
    InputHelper.unsubscribeAll ();
  }
}
