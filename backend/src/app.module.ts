import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from './config/constants';


import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
// import { User } from './user/entities/user.entity';
import { DemoModule } from './demo/demo.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { EmpoyeeModule } from './empoyee/empoyee.module';
import { PostModule } from './post/post.module';
import { Post } from './post/entities/post.entity';
import { PatientModule } from './patient/patient.module';
import { CategoryModule } from './category/category.module';
import { UploadsModule } from './uploads/uploads.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { DummyModule } from './dummy/dummy.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>(DB_HOST),
        port: +configService.get<number>(DB_PORT),
        username: configService.get<string>(DB_USER),
        password: configService.get<string>(DB_PASSWORD),
        database: configService.get<string>(DB_DATABASE),
        entities: [],
        autoLoadEntities: true,
        synchronize: true,
        logging: false
      }),
      inject: [ConfigService],
    }),
    // MulterModule.register({
    //   dest: './files',
    // }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public/files'),
      exclude: ['/api/(.*)'],
    }),
    
    ProductsModule,
    DemoModule,
    UsersModule,
    AuthModule,
    EmpoyeeModule,
    PostModule,
    PatientModule,
    CategoryModule,
    UploadsModule,
    DummyModule
  ],
  controllers: [AppController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
