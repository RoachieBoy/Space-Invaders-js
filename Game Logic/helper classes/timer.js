class Timer {
  /**
   * Checks if the cooldown has elapsed since the last action
   * @param {number} lastActionTime - The time of the last action in milliseconds
   * @param {number} cooldown - The cooldown duration in milliseconds
   * @returns {boolean} - Returns true if the cooldown has elapsed, otherwise false
   */
  static hasCooldownElapsed(lastActionTime, cooldown) {
    const currentTime = Date.now();
    return currentTime - lastActionTime >= cooldown;
  }
}
