const capitalize = require('../codes/capitalize');

test('capitalizes first letter', () => {
  expect(capitalize('hedgehog')).toEqual('Hedgehog');
});

test('capitalize first letter of sentence', () => {
  expect(capitalize('my hedgehog, LeRoy, needs a bath.')).toEqual('My hedgehog, LeRoy, needs a bath.');
});

test('capitalize already capitalized first letter', () => {
    expect(capitalize('LeRoy is the cutest hedgehog.')).toEqual('LeRoy is the cutest hedgehog.');
});

test('does not capitalize empty string', () => {
    expect(capitalize()).toEqual();
})