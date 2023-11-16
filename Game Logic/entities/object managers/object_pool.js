class ObjectPool {
  constructor (poolSize, ObjectClass, objectArgs) {
    this.poolSize = poolSize;
    this.objectsInUse = [];

    this.objects = Array.from (
      {length: this.poolSize},
      () => new ObjectClass (...objectArgs)
    );

    this.objects.forEach (object => (object.inUse = false));
  }

  /**
   * Updates the objects in the pool
   */
  updateObjects () {
    this.displayObjects ();

    this.objectsInUse.forEach (object => {
      object.update ();
    });
  }

  /**
   * Displays the in use objects in the pool
   */
  displayObjects () {
    this.objectsInUse.forEach (object => object.display ());
  }
}
