const average = (array) => {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum/(array.length);
}

const minimum = (array) => {
  let minNumber = array[0];
  for(let i = 0; i < array.length; i++) {
    if (array[i] < minNumber) {
      minNumber = array[i];
    };
  }
  return minNumber;
}

const maximum = (array) => {
    let maxNumber = array[0];
    for(let i = 0; i < array.length; i++) {
      if (array[i] > maxNumber) {
        maxNumber = array[i];
      };
    }
    return maxNumber;
  }

const length = (array) => {
  return array.length;
}
  
  module.exports = {average, minimum, maximum, length};