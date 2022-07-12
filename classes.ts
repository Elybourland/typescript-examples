class Vehicle {
  // public drive(): void {
  //   console.log('chugga chugga');
  // }

  protected honk(): void {
    console.log('beep');
  }
}

const van = new Vehicle();
// van.honk();

class Truck extends Vehicle{
  private drive(): void {
    console.log('vroom!');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const truck = new Truck();
truck.startDrivingProcess();
truck.honk();