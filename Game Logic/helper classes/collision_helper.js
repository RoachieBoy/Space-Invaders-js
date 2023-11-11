/**
 * A helper class for collision detection
 */
class CollisionHelper{
    
    /**
     * Checks if the gameObject is colliding with the canvas
     * @param {GameObject} gameObject - The gameObject to check
     * @param {Object} canvas - The canvas object
     * @returns {boolean} - Returns true if the gameObject is colliding with the canvas
    */
    static checkCanvasCollision(gameObject, canvas){
        // checks the collision with the right and left side of the canvas
        const rightCollision = gameObject.x + gameObject.width > canvas.width;
        const leftCollision = gameObject.x < 0;

        if(rightCollision || leftCollision) return true;
    }
}