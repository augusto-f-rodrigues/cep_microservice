import { Module } from '@nestjs/common';
import { SendCepModule } from './send-cep/viaCEP.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: 'dev.env', isGlobal: true }),
    SendCepModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
