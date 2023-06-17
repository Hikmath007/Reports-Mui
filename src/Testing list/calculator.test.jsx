// calculator.test.js (Integration Test)
const calculator = require('./calculator');

describe('calculator', () => {
  it('should return the correct addition and multiplication results', () => {
    const result = calculator(2, 3);

    expect(result.addition).toBe(5);
    expect(result.multiplication).toBe(6);
  });
});
