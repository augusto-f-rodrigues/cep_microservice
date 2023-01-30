import { Module } from '@nestjs/common';
import { SendCepService } from './send-cep.service';
import { SendCepController } from './send-cep.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [SendCepController],
  providers: [SendCepService],
})
export class SendCepModule {}
