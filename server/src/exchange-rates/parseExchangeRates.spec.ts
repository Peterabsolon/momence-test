import { parseExchangeRates } from './parseExchangeRates';

describe('parseExchangeRates', () => {
  it('works', () => {
    expect(parseExchangeRates('')).toBe([]);
  });
});
