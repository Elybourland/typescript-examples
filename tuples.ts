const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// type alias - might use in a CSV file
type Drink = [string, boolean, number];

// Tuple example - consistent ordering
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// difficult to identify what is going on with a tuple
const carSpecs: [number, number] = [400, 3354];

// object format is better to model a record
const carStats = {
  horsepower: 400,
  weight: 3354
};

