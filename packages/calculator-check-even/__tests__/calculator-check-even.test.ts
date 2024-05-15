const { isEven } = require('../lib/calculator-check-even');

describe('calculator-check-even ', () => {
  it('checknig isEven', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
    expect(isEven(4)).toBe(true);
    expect(isEven(5)).toBe(false);
  });
});
