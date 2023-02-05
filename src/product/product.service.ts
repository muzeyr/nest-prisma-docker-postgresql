import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-prisma-crud';
import {CrudMethodOpts} from "nestjs-prisma-crud/src/crud/types";
import {CreateProductDto} from "./dto/create-product.dto";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class ProductService extends PrismaCrudService {
  constructor(private readonly prismaService: PrismaService) {
    super({
      model: 'product',
      allowedJoins: ['categories'],
      defaultJoins: ['categories'],
    });
  }


  public async create(createDto: CreateProductDto, opts: CrudMethodOpts) {

    const categories = createDto.categoryIds?.map((category) => ({
      id: category,
    }));

    return this.prismaService.product.create({
      data: {
        title: createDto.title,
        price: createDto.price,
        authorId: createDto.authorId,
        published: createDto.published,
        categories: {
          connect: categories,
        },
      },
      include: {
        categories: true,
      },
    });
  }


}
