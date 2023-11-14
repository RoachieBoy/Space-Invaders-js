/**
 * Used for any methods that are used to help with key input
   Inspiration: https://medium.com/@joshbwasserman/managing-simultaneous-keypressed-events-in-javascript-78da1b3b14de 
*/
class InputHelper {
  error_message_events = 'Invalid event type received:';

  // the keys that are currently pressed
  static keys = {};

  // the last key event that was fired
  static lastKeyPressed = null;

  // the events that are subscribed to currently
  static events = [
    {name: 'keydown', handler: InputHelper.keysPressed},
    {name: 'keyup', handler: InputHelper.keysReleased},
  ];

  /**
   * Checks if the key is pressed 
   * @param {*} e - The key event  
   */
  static keysPressed (e) {
    if (e instanceof KeyboardEvent) {
      InputHelper.keys[e.key] = true;
      InputHelper.lastKeyPressed = e.key;
    } else {
      console.error (error_message_events, e);
    }
  }

  /**
   * Checks if the key is released
   * @param {*} e  - The key event
   */
  static keysReleased (e) {
    if (e instanceof KeyboardEvent) {
      InputHelper.keys[e.key] = false;
    } else {
      console.error (error_message_events, e);
    }
  }

  /**
   *  Subscribes to the key events using the event subscriptions array.
   * 
   * Useful for ensuring that the events are subscribed to when they are needed.
   */
  static eventSubscriptions () {
    InputHelper.events.forEach (event => {
      document.addEventListener (event.name, event.handler);
    });
  }

  /**
   * Unsubscribes from the key events using the event subscriptions array.
   * 
   * Useful for ensuring that the events are not subscribed to when they are not needed
   */
  static unsubscribeAll () {
    InputHelper.events.forEach (event => {
      document.removeEventListener (event.name, event.handler);
    });
  }
}
