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

  findOne(id: any) {
    return this._dummeryRepository.findBy({id: id});
    

  }

  async update(id: any, updateDummyDto: UpdateDummyDto) {
    try {
      return await this._dummeryRepository.update(id, updateDummyDto);

    } catch (error) {
      throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: any) {
    return await  this._dummeryRepository.delete({ id: id });
  }


}
