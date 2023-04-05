import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path, { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';


@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}


  // @Post('patient')
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: './public/files',
  //       filename: (req, file, callback) => {
  //       const uniqueSuffix =
  //           Date.now() + '-' + Math.round(Math.random() * 1e9);
  //         const ext = extname(file.originalname);
  //         const filename = `${uniqueSuffix}${ext}`;
  //         console.log(filename);
  //         callback(null, filename);
  //       },
  //     }),
  //   }),
  // )
  // uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   // console.log(file);
  // }

  @Post()
  create(@Body() createUploadDto: CreateUploadDto) {
    return this.uploadsService.create(createUploadDto);
  }

  @Get()
  findAll() {
    return this.uploadsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uploadsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUploadDto: UpdateUploadDto) {
    return this.uploadsService.update(+id, updateUploadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadsService.remove(+id);
  }
}
