import { Module } from '@nestjs/common';
import { ViaCEPService } from './viaCEP.service';
import { ViaCEPController } from './viaCEP.controller';
import { HttpModule } from '@nestjs/axios';
import { ViaCepGrpcServerController } from './viacep-grpc-server/viacep-grpc-server.controller';

@Module({
  imports: [HttpModule],
  controllers: [ViaCEPController, ViaCepGrpcServerController],
  providers: [ViaCEPService],
})
export class ViaCepModule {}
