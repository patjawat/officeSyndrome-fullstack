import { Test, TestingModule } from '@nestjs/testing';
import { EmpoyeeController } from './empoyee.controller';
import { EmpoyeeService } from './empoyee.service';

describe('EmpoyeeController', () => {
  let controller: EmpoyeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpoyeeController],
      providers: [EmpoyeeService],
    }).compile();

    controller = module.get<EmpoyeeController>(EmpoyeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
