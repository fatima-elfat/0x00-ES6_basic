/**
 *task 7
 */
export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * getter, setter of name
   */
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
   * getter, setter of code.
   */
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  /**
   * to string.
   */
  toString() {
    return `[object ${this._code}]`;
  }
}
