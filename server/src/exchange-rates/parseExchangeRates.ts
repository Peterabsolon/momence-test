import { ExchangeRate } from './exchange-rates.types';

export const parseExchangeRates = (str: string): ExchangeRate[] => {
  if (!str.length || !str.includes('\n')) {
    return null;
  }

  const rows = str.split('\n');

  const columnsRow = rows[1];
  if (columnsRow !== 'Country|Currency|Amount|Code|Rate') {
    return null;
  }

  const dataRows = rows.slice(2, rows.length);
  if (!dataRows.length) {
    return [];
  }

  return dataRows.map(parseExchangeRate).filter(Boolean);
};

const parseExchangeRate = (row: string): ExchangeRate | null => {
  const parts = row.split('|');
  if (parts.length !== 5) {
    return null;
  }

  const country = parts[0];
  const currency = parts[1];
  const amount = Number(parts[2]);
  const code = parts[3];
  const rate = Number(parts[4]);

  return { country, currency, amount, code, rate };
};
