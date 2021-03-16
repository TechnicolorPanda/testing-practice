const encrypt = require('../codes/caesarCipher');

test('encrypts word', () => {
  expect(encrypt('hedgehog')).toEqual('ifehfiph');
});

test('encrypts word with wrapping', () => {
  expect(encrypt('zebra')).toEqual('afcsb');
})

test('encrypts word with capitalization', () => {
  expect(encrypt('LeRoy')).toEqual('MfSpz');
})

// test('encrypts sentence', () => {
//   expect(encrypt('LeRoy is the cutest hedgehog')).toEqual('MfSpz jt uif dvuftu ifehfiph');
// });

// test('encrypts sentence maintaining punctution', () => {
//     expect(encrypt('My hedgehog, LeRoy, needs a bath.')).toEqual('Nz ifehfiph, MfSpz, offet b cbui.');
// });

// test('does not encrypt empty string', () => {
//     expect(encrypt()).toEqual();
// })