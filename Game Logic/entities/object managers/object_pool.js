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

  updateObjects () {
    this.displayObjects ();

    for (let i = this.objectsInUse.length - 1; i >= 0; i--) {
      const object = this.objectsInUse[i];

      if (this.isOutOfBounds (object)) {
        this.objectsInUse.splice (i, 1);
        object.inUse = false;
      } else {
        object.update ();
      }
    }
  }

  displayObjects () {
    this.objectsInUse.forEach (object => object.display ());
  }

  isOutOfBounds (object) {
    // Override this in subclasses to provide specific out of bounds logic
    return false;
  }
}
