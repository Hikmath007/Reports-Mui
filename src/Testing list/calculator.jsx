// calculator.js
const sum = require('./sum');
const multiply = require('./multiply');

function calculator(a, b) {
  const additionResult = sum(a, b);
  const multiplicationResult = multiply(a, b);

  return {
    addition: additionResult,
    multiplication: multiplicationResult,
  };
}

module.exports = calculator;
