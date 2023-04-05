import { Injectable } from '@nestjs/common';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { Upload } from './entities/upload.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UploadsService {

  constructor(
    @InjectRepository(Upload)
    private uploadRepository:Repository<Upload>
  ){

  }
  async create(file):Promise<Upload> {
    const fileUpload = {
      filename:file.filename,
      originalname: file.originalname,
      size: file.size,
      type: file.mimetype,
      path: file.path
    }
    
    const upload = this.uploadRepository.create(fileUpload);
    return await this.uploadRepository.save(upload);
  }

  findAll() {
    return `This action returns all uploads`;
  }

  findOne(id: number) {
    return `This action returns a #${id} upload`;
  }

  update(id: number, updateUploadDto: UpdateUploadDto) {
    return `This action updates a #${id} upload`;
  }

  remove(id: number) {
    return `This action removes a #${id} upload`;
  }
}
