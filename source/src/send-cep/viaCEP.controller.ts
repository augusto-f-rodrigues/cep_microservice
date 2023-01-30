import { Controller, Get, Param } from '@nestjs/common';
import { ViaCEPService } from './viaCEP.service';

@Controller('viaCEP')
export class ViaCEPController {
  constructor(private readonly sendCepService: ViaCEPService) {}

  @Get('/getInfo/:cep')
  async getCep(@Param('cep') cep: string) {
    return await this.sendCepService.getCep(cep);
  }
}
