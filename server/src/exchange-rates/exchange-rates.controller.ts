import { Controller, Get } from '@nestjs/common';

import { ExchangeRatesService } from './exchange-rates.service';

@Controller('exchange-rates')
export class ExchangeRatesController {
  constructor(private readonly exchangeRatesService: ExchangeRatesService) {}

  @Get()
  getParsed() {
    return this.exchangeRatesService.getParsed();
  }
}
