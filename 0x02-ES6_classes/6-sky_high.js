import Building from './5-building';
/**
 * task 6.
 */
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  /**
   * getter, setter floors.
   */
  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  /**
   * return evacuation Warning Message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
