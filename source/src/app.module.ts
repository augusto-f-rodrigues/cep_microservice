import { ViaCepGrpcServerController } from './viaCep/viacep-grpc-server/viacep-grpc-server.controller';
import { Module } from '@nestjs/common';
import { ViaCepModule } from './viaCep/viaCEP.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: 'dev.env', isGlobal: true }),
    ViaCepModule,
  ],
  controllers: [
        ],
  providers: [],
})
export class AppModule {}
