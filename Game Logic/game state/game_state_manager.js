/**
 * Manages the state of the game.
 */
class GameStateManager {
  constructor () {
    this.states = {};
    this.currentState = null;
  }

  /**
   * Registers a state with the game.
   * @param {*} name  - The name of the state to register.
   * @param {*} state - The state to register with the game.
   */
  registerState (name, state) {
    this.states[name] = state;
  }

  /**
   * Sets the state of the game to the state with the given name.
   * 
   * Ensures that the current state is exited before the new state is entered.
   * @param {*} name - The name of the state to set the game to
   */
  setState (name) {
    if (!this.states[name]) {
      throw new Error (`State '${name}' not found`);
    }

    if (this.currentState) {
      this.currentState.exit ();
    }

    this.currentState = this.states[name];
    this.currentState.enter ();
  }

  /**
     * Updates the current state of the game.
     */
  update () {
    if (this.currentState) {
      this.currentState.update ();
    }
  }
}
