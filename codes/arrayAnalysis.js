const average = (array) => {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum/(array.length);
}

const length = (array) => {
  return array.length;
}
  
  module.exports = {average, length};