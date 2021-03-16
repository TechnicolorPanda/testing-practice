const reverseString = (string) => {
    if (typeof string === 'string') {
      let newString = '';
       for (let i = string.length - 1; i >= 0; i--) {
        newString = newString.concat(string[i]);
      }
      return newString;
    } else {
      return;
    }
  }
  
  module.exports = reverseString;