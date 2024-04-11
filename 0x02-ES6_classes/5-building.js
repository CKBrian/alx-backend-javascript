/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if ((this.constructor !== Building) && !('evacuationWarningMessage' in this.constructor)) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() { return this._sqft; }
}
