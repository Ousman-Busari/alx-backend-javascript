export default class Building {
  constructor(sqft) {
    // eslint-disable-next-line
    this._sqft = sqft;
    if (
      this.constructor !== Building
      && this.evacuationWarningMessage === undefined
    ) {
      throw Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  get sqft() {
    // eslint-disable-next-line
    return this._sqft;
  }
}
