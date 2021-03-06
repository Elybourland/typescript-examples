const add = (a: number, b: number): number => {
  return a + b;
};

// There's type inference with functions but always use type annotation in case a mistake is made on writing the function
// Example below - left out type annotation and return value, and typescript didn't catch error in code

const subtract = (a: number, b: number) => {
  a - b;
};

// Should be:

const divide = (a: number, b: number): number => {
  return a / b;
};

function multiply(a: number, b: number): number {
  return a * b;
};

const anotherMultiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

// const logWeather = (forecast: { date: Date, weather: string}): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };

// Destructuring with annotations
// Destructuring first, then the annotations

const logWeather = ({ date, weather}: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
