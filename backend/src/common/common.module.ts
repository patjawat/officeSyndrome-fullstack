import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { CommonController } from './common.controller';
import { CategoryGroupModule } from 'src/category-group/category-group.module';

@Module({
  imports:[CategoryGroupModule],
  controllers: [CommonController],
  providers: [CommonService],
  exports:[CommonService]
})
export class CommonModule {}
