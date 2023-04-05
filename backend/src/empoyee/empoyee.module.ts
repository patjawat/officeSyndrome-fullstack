import { Module } from '@nestjs/common';
import { EmpoyeeService } from './empoyee.service';
import { EmpoyeeController } from './empoyee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empoyee } from './entities/empoyee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Empoyee])],
  controllers: [EmpoyeeController],
  providers: [EmpoyeeService],
  exports: [TypeOrmModule]
  
})
export class EmpoyeeModule {}
