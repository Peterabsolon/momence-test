import { parseExchangeRates } from './parseExchangeRates';

describe('parseExchangeRates', () => {
  it('returns empty array when data empty', () => {
    expect(parseExchangeRates('')).toEqual([]);
  });

  it('returns empty array when data malformed', () => {
    expect(parseExchangeRates('wowsuchmalformeddata')).toEqual([]);
  });
});
