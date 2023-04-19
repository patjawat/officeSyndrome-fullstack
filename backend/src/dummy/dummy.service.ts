import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDummyDto } from './dto/create-dummy.dto';
import { UpdateDummyDto } from './dto/update-dummy.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dummy } from './entities/dummy.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DummyService {

  constructor(
    @InjectRepository(Dummy)
    private _dummeryRepository: Repository<Dummy>
  ) {}
  async create(createDummyDto: CreateDummyDto) {
    try {
      const  newDummy = this._dummeryRepository.create(createDummyDto);
      return await this._dummeryRepository.save(newDummy); 
      
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }

  findAll() {
    return this._dummeryRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} dummy`;
  }

  update(id: number, updateDummyDto: UpdateDummyDto) {
    return `This action updates a #${id} dummy`;
  }

  remove(id: number) {
    return `This action removes a #${id} dummy`;
  }
}
