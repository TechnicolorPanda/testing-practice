const sum = (a, b) => {
    return a + b
};

const subtract = (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b;
}

const divide = (a, b) => {
  if (b !== 0) {
    return a/b; 
  } else {
    return;
  }
}

  
module.exports = {sum, subtract, multiply, divide};