class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

class Truck extends Vehicle{
  drive(): void {
    console.log('vroom!');
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const truck = new Truck();
truck.drive();
truck.honk();