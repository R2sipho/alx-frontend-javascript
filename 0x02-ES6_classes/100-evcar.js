import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range; // Ensure to use _range internally for consistency
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species(this.brand, this.motor, this.color, this.range);
  }
}

