import { Module } from '@nestjs/common';
import { ViaCEPService } from './viaCEP.service';
import { ViaCEPController } from './viaCEP.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ViaCEPController],
  providers: [ViaCEPService],
})
export class SendCepModule {}
