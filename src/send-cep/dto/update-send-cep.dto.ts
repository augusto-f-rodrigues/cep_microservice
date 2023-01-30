import { PartialType } from '@nestjs/mapped-types';
import { CreateSendCepDto } from './create-send-cep.dto';

export class UpdateSendCepDto extends PartialType(CreateSendCepDto) {}
