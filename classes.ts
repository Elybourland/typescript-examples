class Vehicle {
  // color: string;
  // public drive(): void {
  //   console.log('chugga chugga');
  // }

  // color: string = 'red';

  constructor(public color: string) {
    // this.color = color;
  }

  protected honk(): void {
    console.log('beep');
  }
}

const van = new Vehicle('orange');
// van.honk();
console.log(van.color);

class Truck extends Vehicle{
  constructor(public wheels: number, color: string) {
    super(color);
  }

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

const truck = new Truck(4, 'green');
truck.startDrivingProcess();
// truck.honk();