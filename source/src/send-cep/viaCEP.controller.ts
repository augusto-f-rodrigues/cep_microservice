import { Controller, Get, Param } from '@nestjs/common';
import { ViaCEPService } from './viaCEP.service';

@Controller('viaCEP')
export class ViaCEPController {
  constructor(private readonly viaCepService: ViaCEPService) {}

  @Get('/getInfo/:cep')
  async getCep(@Param('cep') cep: string) {
    return await this.viaCepService.getCep(cep);
  }

  @Get('/getInfo/:uf/:city/:logradouro')
  async getCepFromUf(
    @Param('uf') uf: string,
    @Param('city') city: string,
    @Param('logradouro') logradouro: string,
  ) {
    return await this.viaCepService.getCepFromUf(uf, city, logradouro);
  }
}
