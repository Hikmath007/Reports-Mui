// sum.test.js (Unit Test)
const sum = require('./sum');

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
  });
});
