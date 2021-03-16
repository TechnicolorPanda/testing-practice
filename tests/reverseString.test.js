const reverseString = require('../codes/reverseString');

test('reverses letters in a word', () => {
  expect(reverseString('desserts')).toEqual('stressed');
});

test('reverses letters in a sentence', () => {
  expect(reverseString('Was it a car or a cat I saw?')).toEqual('?was I tac a ro rac a ti saW');
});

test('does not reverse an empty string', () => {
    expect(reverseString()).toEqual();
})