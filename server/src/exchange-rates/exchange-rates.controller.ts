import { Controller, Get } from '@nestjs/common';

@Controller('exchange-rates')
export class ExchangeRatesController {
  @Get()
  findAll() {
    return [{ foo: 'bar' }];
  }
}
