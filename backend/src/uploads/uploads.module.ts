import { Global, Module } from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { UploadsController } from './uploads.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Upload } from './entities/upload.entity';
import { MulterModule } from '@nestjs/platform-express';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Upload]),
  MulterModule.register({
    dest: './public/files',
  }),],
  controllers: [UploadsController],
  providers: [UploadsService],
  exports:[UploadsService]
})
export class UploadsModule {
  constructor(private uploadService: UploadsService) {}
}
