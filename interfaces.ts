interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

// oldCivic must have a name, year, and broken

printVehicle(oldCivic);