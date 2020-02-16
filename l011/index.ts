interface Driverble {
  speed: number;
  drive(): string;
}

class Car implements Driverble {
  speed = 10;
  drive() {
    return `I am driving at ${this.speed}`;
  }
}

const startDriving = (vehicle: Driverble) => {
  vehicle.drive();
};
const myNewCar = new Car();
startDriving(myNewCar);
