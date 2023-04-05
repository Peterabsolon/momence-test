import { parseExchangeRates } from './parseExchangeRates';

describe('parseExchangeRates', () => {
  it('returns null when string empty', () => {
    expect(parseExchangeRates('')).toBe(null);
  });

  it('returns null when string malformed', () => {
    expect(parseExchangeRates('wowsuchmalformeddata')).toBe(null);
  });

  it('returns null when columns row malformed', () => {
    const rows = ['03 Apr 2023 #66', 'FOO|BAR|BAZ|QUX|FRED'];
    expect(parseExchangeRates(rows.join('\n'))).toBe(null);
  });

  it('returns empty array when data rows empty', () => {
    const rows = ['03 Apr 2023 #66', 'Country|Currency|Amount|Code|Rate'];
    expect(parseExchangeRates(rows.join('\n'))).toEqual([]);
  });

  it('returns empty array when data row malformed', () => {
    const rows = [
      '03 Apr 2023 #66',
      'Country|Currency|Amount|Code|Rate',
      'foobarbaz',
    ];
    expect(parseExchangeRates(rows.join('\n'))).toEqual([]);
  });

  it('returns parsed data when string valid', () => {
    const rows = [
      '03 Apr 2023 #66',
      'Country|Currency|Amount|Code|Rate',
      'Australia|dollar|1|AUD|14.578',
    ];

    expect(parseExchangeRates(rows.join('\n'))).toEqual([
      {
        country: 'Australia',
        currency: 'dollar',
        amount: 1,
        code: 'AUD',
        rate: 14.578,
      },
    ]);
  });
});
