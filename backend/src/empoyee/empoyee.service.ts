import { Injectable } from '@nestjs/common';
import { CreateEmpoyeeDto } from './dto/create-empoyee.dto';
import { UpdateEmpoyeeDto } from './dto/update-empoyee.dto';

@Injectable()
export class EmpoyeeService {
  create(createEmpoyeeDto: CreateEmpoyeeDto) {
    return 'This action adds a new empoyee';
  }

  findAll() {
    return `This action returns all empoyee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empoyee`;
  }

  update(id: number, updateEmpoyeeDto: UpdateEmpoyeeDto) {
    return `This action updates a #${id} empoyee`;
  }

  remove(id: number) {
    return `This action removes a #${id} empoyee`;
  }
}
