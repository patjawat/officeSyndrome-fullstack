import { Injectable } from '@nestjs/common';
import { CreateCategoryGroupDto } from './dto/create-category-group.dto';
import { UpdateCategoryGroupDto } from './dto/update-category-group.dto';

@Injectable()
export class CategoryGroupService {
  create(createCategoryGroupDto: CreateCategoryGroupDto) {
    return 'This action adds a new categoryGroup';
  }

  findAll() {
    return `This action returns all categoryGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoryGroup`;
  }

  update(id: number, updateCategoryGroupDto: UpdateCategoryGroupDto) {
    return `This action updates a #${id} categoryGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoryGroup`;
  }
}
