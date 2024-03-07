/**
 *
 */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /**
   * getter, setter of the code.
   */
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  /**
   * getter, setter of the name.
   */
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
   * display Full Currency.
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
