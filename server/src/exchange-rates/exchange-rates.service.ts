import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

// TODO: Move somewhero elso
const API_URL =
  'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt';

@Injectable()
export class ExchangeRatesService {
  constructor(private readonly httpService: HttpService) {}

  findAll(): Observable<AxiosResponse<any[]>> {
    return this.httpService.get(API_URL).pipe(map((res) => res.data));
  }
}
