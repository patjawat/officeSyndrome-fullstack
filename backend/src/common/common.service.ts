import { Injectable } from '@nestjs/common';
import { CreateCommonDto } from './dto/create-common.dto';
import { UpdateCommonDto } from './dto/update-common.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryGroup } from 'src/category-group/entities/category-group.entity';
import { Category } from 'src/category/entities/category.entity';
import { Repository } from 'typeorm';
import { CategoryService } from 'src/category/category.service';
import { CategoryGroupService } from 'src/category-group/category-group.service';

@Injectable()
export class CommonService {

  constructor(
    private _cateoryGroupservice:CategoryGroupService
  ){

  }
  create(createCommonDto: CreateCommonDto) {
    return 'This action adds a new common';
  }

  findAll() {
    return this._cateoryGroupservice.findAll()
  }


  findAllDepartment() {
    return this._cateoryGroupservice.findAllDepartment()
  }

  findOne(id: number) {
    return `This action returns a #${id} common`;
  }

  update(id: number, updateCommonDto: UpdateCommonDto) {
    return `This action updates a #${id} common`;
  }

  remove(id: number) {
    return `This action removes a #${id} common`;
  }
}
