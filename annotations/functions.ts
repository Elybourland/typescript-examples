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
