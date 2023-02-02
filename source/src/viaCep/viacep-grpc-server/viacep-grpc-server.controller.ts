import { Metadata } from '@grpc/grpc-js';
import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ServerUnaryCall } from 'grpc';
import { ViaCEPService } from '../viaCEP.service';

@Controller()
export class ViaCepGrpcServerController {
  private readonly logger = new Logger(ViaCepGrpcServerController.name);
  constructor(private readonly viaCepServices: ViaCEPService) {}

  @GrpcMethod('ViaCepService', 'GetCep')
  async getCep({ cep }, metadata: Metadata, call: ServerUnaryCall<any>) {
    this.logger.debug('CEP', cep);
    return await this.viaCepServices.getCep(cep);
  }
}
