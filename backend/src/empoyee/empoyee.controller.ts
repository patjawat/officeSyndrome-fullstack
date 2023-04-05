import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpoyeeService } from './empoyee.service';
import { CreateEmpoyeeDto } from './dto/create-empoyee.dto';
import { UpdateEmpoyeeDto } from './dto/update-empoyee.dto';

@Controller('empoyee')
export class EmpoyeeController {
  constructor(private readonly empoyeeService: EmpoyeeService) {}

  @Post()
  create(@Body() createEmpoyeeDto: CreateEmpoyeeDto) {
    return this.empoyeeService.create(createEmpoyeeDto);
  }

  @Get()
  findAll() {
    return this.empoyeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empoyeeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpoyeeDto: UpdateEmpoyeeDto) {
    return this.empoyeeService.update(+id, updateEmpoyeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empoyeeService.remove(+id);
  }
}
