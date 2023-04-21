import { Module } from '@nestjs/common';
import { CategoryGroupService } from './category-group.service';
import { CategoryGroupController } from './category-group.controller';

@Module({
  controllers: [CategoryGroupController],
  providers: [CategoryGroupService]
})
export class CategoryGroupModule {}
