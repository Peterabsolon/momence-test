import { Observable, map } from 'rxjs';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { ExchangeRate } from './exchange-rates.types';
import { parseExchangeRates } from './parseExchangeRates';

const RATES_URL =
  'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt';

@Injectable()
export class ExchangeRatesService {
  constructor(private readonly httpService: HttpService) {}

  getRaw(): Observable<string> {
    return this.httpService.get(RATES_URL).pipe(map((res) => res.data));
  }

  getParsed(): Observable<ExchangeRate[]> {
    return this.getRaw().pipe(map(parseExchangeRates));
  }
}
