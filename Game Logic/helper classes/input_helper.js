/*
    Used for any methods that are used to help with key input

    Inspiration: https://medium.com/@joshbwasserman/managing-simultaneous-keypressed-events-in-javascript-78da1b3b14de 
*/
class InputHelper{

    static keys = {};
    static lastKeyPressed = null;

    /**
     * Checks if a key is pressed 
     * @param {KeyboardEvent} e
     * @returns {boolean} - Returns true if the key is pressed
     */
    static keysPressed(e){
        InputHelper.keys[e.key] = true;
        InputHelper.lastKeyPressed = e.key;
    }

    /**
     * Checks if a key is released
     * @param {KeyboardEvent} e
     * @returns {boolean} - Returns true if the key is released
     */
    static keysReleased(e){
        InputHelper.keys[e.key] = false;
    }

    /**
    *  Subscribes to the keydown and keyup events
    */
    static eventSubscriptions(){
        document.addEventListener("keydown", InputHelper.keysPressed);
        document.addEventListener("keyup", InputHelper.keysReleased);
    }
}

