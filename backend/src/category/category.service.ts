import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { CategoryGroup } from 'src/category-group/entities/category-group.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private _categoryRepository: Repository<Category>
  ) { }

  async create(createCategoryDto: CreateCategoryDto) {

    const   {
      title,
      name,
      categoryGroup
    } = createCategoryDto;

    // const category = await this._categoryRepository.create(createCategoryDto);
    const category = await this._categoryRepository.save(createCategoryDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Category created successfully',
      category
    };
  }

  async findAll() {
    const data =  await this._categoryRepository.find({
      relations: {
        posts: true,
        categoryGroup: true,

      },
    });

    return {
      statusCode: HttpStatus.OK,
      message: 'Category fetched successfully',
      data
    };
  }

  findOne(id: number) {
    return this._categoryRepository.findOneBy({ id: id });
  }

  // ค้นหาจากชื่อหมวดหมู่
  findByName(name:any){
    return this._categoryRepository.find({  
      relations: {
      categoryGroup: false,
    },
      where: {
        categoryGroup: {
          name: name
        }
    },
    select:["id","name"]
   });
  }

  async update(id: number, data: UpdateCategoryDto) {
    return this._categoryRepository.update(id, data);
  }

  async remove(id: number) {
    return this._categoryRepository.delete(id);
  }
}
