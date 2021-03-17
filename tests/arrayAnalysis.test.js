const {average, length} = require('../codes/arrayAnalysis');

const data = [1, 8, 3, 4, 2, 6];

test('returns average of array', () => {
  expect(average(data)).toEqual(4);
});

// test('returns minimum number', () => {
//   expect(minimum(1, 8, 3, 4, 2, 6)).toEqual(1);
// })

// test('returns maximum number', () => {
//   expect(maximum(1, 8, 3, 4, 2, 6)).toEqual(8);
// })

test('returns number of items in an array', () => {
    expect(length(data)).toEqual(6);
  });
