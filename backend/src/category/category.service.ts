import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private _categoryRepository:Repository<Category> 
  ){}
  async create(createCategoryDto: CreateCategoryDto) {
   return await this._categoryRepository.save(createCategoryDto);

  }

  async findAll():Promise<Category[]> {
    return await this._categoryRepository.find({
      relations: {
        posts: true,
    },
    });
  }

  findOne(id: number) {
    return this._categoryRepository.findOneBy({id: id});
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
   return this._categoryRepository.update(id, updateCategoryDto);
  }

  async remove(id: number) {
    return this._categoryRepository.delete(id);
  }
}
