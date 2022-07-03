interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
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

const beverage = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// oldCivic must have a summary function

printSummary(oldCivic);
printSummary(beverage);