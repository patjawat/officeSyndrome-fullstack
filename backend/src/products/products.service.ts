import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async create(dto: CreateProductDto): Promise<any>
  {
    try {
      return await this.productRepository.save(dto)
      // return dto;
    } catch (error) {
      throw new NotFoundException({
      massage:"Save Error"
      });
      
    }
  }

  
  async findOne(id: number): Promise<Product> {
  // findOne(id: number): Promise<Product> {
    try {
     return  await this.productRepository.findOne({where: {id: id}});
    } catch (error) {
      return null;
    }
  }


  async update(id: number, product: UpdateProductDto): Promise<Product> {
    await this.productRepository.update(id, product);
    const updatedProduct = await this.productRepository.findOne({where:{id:id}});
    if (updatedProduct) {
      return updatedProduct;
    }

    throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
  }

  async remove(id: number) {
    // return `This action removes a #${id} product`;
    const deletedProduct = await this.productRepository.delete(id);
    if (!deletedProduct.affected) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
  }
}
