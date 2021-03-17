const {average, minimum, maximum, length, analyze} = require('../codes/arrayAnalysis');

const data = [1, 8, 3, 4, 2, 6];

test('returns average of array', () => {
  expect(average(data)).toEqual(4);
});

test('returns minimum number', () => {
  expect(minimum(data)).toEqual(1);
})

test('returns maximum number', () => {
  expect(maximum(data)).toEqual(8);
})

test('returns number of items in an array', () => {
  expect(length(data)).toEqual(6);
});

test('returns analysis in on output', () => {
  expect(analyze(data)).toEqual({
    average: 4,
    minimum: 1,
    maximum: 8,
    length: 6,
  })
})
