/**
 * task 8.
 */
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * getter, setter of size.
   */
  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  /**
   * getter, setter of location.
   */
  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  /**
   * convert this object to a primitive value.
   * cast it based on type number or string.
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
