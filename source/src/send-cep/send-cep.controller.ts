import { Controller, Get, Param } from '@nestjs/common';
import { SendCepService } from './send-cep.service';

@Controller('cep')
export class SendCepController {
  constructor(private readonly sendCepService: SendCepService) {}

  @Get(':cep/json')
  getCep(@Param('cep') cep: string) {
    return this.sendCepService.getCep(cep);
  }
}
