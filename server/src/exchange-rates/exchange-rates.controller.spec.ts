import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';

import { ExchangeRatesController } from './exchange-rates.controller';
import { ExchangeRatesService } from './exchange-rates.service';

describe('ExchangeRatesController', () => {
  let controller: ExchangeRatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [ExchangeRatesController],
      providers: [ExchangeRatesService],
    }).compile();

    controller = module.get<ExchangeRatesController>(ExchangeRatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
