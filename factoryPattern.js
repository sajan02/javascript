/**
 * Factory Pattern is a pattern that uses factory methods to create objects without specifying 
 * the exact class or constructor function from which the object will be created.
 * Reference - https://blog.bitsrc.io/understanding-design-patterns-in-javascript-13345223f2dd
 */

class Car{
    constructor(options) {
      this.doors = options.doors || 4;
      this.state = options.state || 'brand new';
      this.color = options.color || 'white';
    }
  }
  class Truck {
    constructor(options) {
      this.doors = options.doors || 4;
      this.state = options.state || 'used';
      this.color = options.color || 'black';
    }
  }
  class VehicleFactory {
    createVehicle(options) {
      if(options.vehicleType === 'car') {
        return new Car(options);
      } else if(options.vehicleType === 'truck') {
        return new Truck(options);
        }
    }
  }

  const factory = new VehicleFactory();
  const truck = factory.createVehicle({
      vehicleType: 'truck'
  })

  const car = factor