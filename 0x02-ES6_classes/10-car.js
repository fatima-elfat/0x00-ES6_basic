/**
 * task 10.
 */
export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  /**
   * getter, setter of brand.
   */
  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  /**
   * getter, setter of motor.
   */
  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  /**
   *  getter, setter of color.
   */
  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  /**
   *
   */
  static get [Symbol.species]() {
    return this;
  }

  /**
   *
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
