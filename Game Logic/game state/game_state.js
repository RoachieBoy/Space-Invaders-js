/**
 * Abstract class for game states to extend.
 */
class GameState {
  /**
   *  Loads the assets for the game state & initializes the game state - used for loading objects, assetc etc.
   */
  enter () {
    throw new Error ('The enter method must be implemented');
  }

  /**
     *  Updates the game state - used for updating objects, checking collisions, etc.
     */
  update () {
    throw new Error ('The update method must be implemented');
  }

  /**
   * Exits the game state - used for unloading assets and removing event listeners
   */
  exit () {
    throw new Error ('The exit method must be implemented');
  }
}
