import { Injectable } from '@nestjs/common';
import { CreateCategoryGroupDto } from './dto/create-category-group.dto';
import { UpdateCategoryGroupDto } from './dto/update-category-group.dto';
import { CategoryGroup } from './entities/category-group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryGroupService {

  constructor(
    @InjectRepository(CategoryGroup)
    private _categoryRepository: Repository<CategoryGroup>
  ) { }
  create(createCategoryGroupDto: CreateCategoryGroupDto) {
    const newCategoryGroup = this._categoryRepository.create(createCategoryGroupDto);
    return this._categoryRepository.save(newCategoryGroup);
  }

  async findAll(): Promise<CategoryGroup[]> {
    return await this._categoryRepository.find({
      relations: {
        categorys: true,
      },
    });
  }

  // async findAllDepartment(): Promise<CategoryGroup[]> {
  async findAllDepartment() {
   const data = await this._categoryRepository.find({
    select:["id"],
      where:{
        name:'department'
      },
      relations: {
        categorys: true,
      },
    });

    return data;
     
    
  }
  async findOne(id: number) {
    return await this._categoryRepository.findOne({ where: { id: id },
      relations:{
        categorys:true,
    } });
  }

  update(id: number, updateCategoryGroupDto: UpdateCategoryGroupDto) {
    return `This action updates a #${id} categoryGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoryGroup`;
  }
}
