import { PartialType } from '@nestjs/mapped-types';
import { CreateViaCEPDto } from './create-via-cep.dto';

export class UpdateViaCEPDto extends PartialType(CreateViaCEPDto) {}
