/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
    this.evacuationWarningMessage();
  }

  get floors() { return this._floors; }

  set floors(value) {
    if (typeof (value) !== 'number') { throw new TypeError('Floors must be a number'); }
    this._floors = value;
  }

  evacuationWarningMessage() { return `Evacuate slowly the ${this._floors} floors`; }
}
