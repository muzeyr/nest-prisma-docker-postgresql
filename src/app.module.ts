import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import {PrismaCrudModule} from "nestjs-prisma-crud";
import {PrismaService} from "./prisma/prisma.service";
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [PrismaModule,
    PrismaCrudModule.register({
      prismaService: PrismaService,
    }),
    UserModule,
    PostModule,
    ProductModule,
    CategoryModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
