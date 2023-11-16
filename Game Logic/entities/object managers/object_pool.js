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

  /**
   * Removes the object at the specified index from the objectsInUse array
   * @param {*} index the index of the object to remove
   */
  removeObjectAtIndex (index) {
    this.objects[index].inUse = false;
    // when index > -1 is a way to check if the index exists in the array
    if (index > -1) {
      this.objectsInUse.splice (index, 1);
    }
  }
}
