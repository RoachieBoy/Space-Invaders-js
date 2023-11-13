/**
 * A helper class for collision detection
 */
class CollisionHelper {
  /**
   * Checks if the gameObject is colliding with the canvas
   * @param {GameObject} gameObject - The gameObject to check
   * @param {Object} canvas - The canvas object
   * @returns {boolean} - Returns true if the gameObject is colliding with the canvas
   */
  static checkCanvasCollision (gameObject, canvas) {
    // checks the collision with the right and left side of the canvas
    const rightCollision = gameObject.x + gameObject.width > canvas.width;
    const leftCollision = gameObject.x < 0;

    if (rightCollision || leftCollision) return true;
  }

  /**
   * Checks if two rectangular gameObjects are colliding
   * @param {*} rect1 - The first gameObject
   * @param {*} rect2 - The second gameObject
   * @returns {boolean} - Returns true if the two gameObjects are colliding
   */
  static checkRectCollision (rect1, rect2) {
    const x_collision =
      rect1.x + rect1.width >= rect2.x && rect1.x <= rect2.x + rect2.width;
    const y_collision =
      rect1.y + rect1.height >= rect2.y && rect1.y <= rect2.y + rect2.height;

    if (x_collision && y_collision) return true;
  }
}
