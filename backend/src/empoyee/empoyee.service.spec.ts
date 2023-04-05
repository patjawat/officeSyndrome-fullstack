import { Test, TestingModule } from '@nestjs/testing';
import { EmpoyeeService } from './empoyee.service';

describe('EmpoyeeService', () => {
  let service: EmpoyeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpoyeeService],
    }).compile();

    service = module.get<EmpoyeeService>(EmpoyeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
