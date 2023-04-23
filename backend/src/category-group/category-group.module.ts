import { Module } from '@nestjs/common';
import { CategoryGroupService } from './category-group.service';
import { CategoryGroupController } from './category-group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryGroup } from './entities/category-group.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CategoryGroup])],
  controllers: [CategoryGroupController],
  providers: [CategoryGroupService],
  exports: [CategoryGroupService]
})
export class CategoryGroupModule {}
