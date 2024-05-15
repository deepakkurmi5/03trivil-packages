const { isOdd } = require('../lib/calculator-check-odd');

describe('calculator-check-odd ', () => {
  it('checking isOdd', () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(3)).toBe(true);
  });
});
