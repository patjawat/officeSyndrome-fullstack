import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpoyeeDto } from './create-empoyee.dto';

export class UpdateEmpoyeeDto extends PartialType(CreateEmpoyeeDto) {}
