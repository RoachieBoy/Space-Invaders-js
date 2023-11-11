/**
 * A helper class for collision detection
 */
class CollisionHelper{
    
    /**
     * Checks if two rectangles are colliding
     * @param {*} rect1 the first rectangle to check collision against
     * @param {*} rect2 the second rectangle to check collision against
     * @returns {boolean} true if the two rectangles are colliding, false otherwise
     */
    static checkRectangleCollision(rect1, rect2) {
        if(Math.abs(rect1.x - rect2.x) < rect1.width + rect2.width) {
            if(Math.abs(rect1.y - rect2.y) < rect1.height + rect2.height){
                return true
            }

            return false;
        }
    }
}