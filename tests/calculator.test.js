const {sum, subtract, multiply, divide} = require('../codes/calculator');

test('sum of two numbers', () => {
  expect(sum(4, 2)).toEqual(6);
});

test('subtracts two numbers', () => {
  expect(subtract(4, 2)).toEqual(2);
});

test('multiply two numbers', () => {
  expect(multiply(4, 2)).toEqual(8);
});

test('divides two numbers', () => {
  expect(divide(42, 6)).toEqual(7);
})

test('does not divide by zero', () => {
  expect(divide(42, 0)).toEqual();
})