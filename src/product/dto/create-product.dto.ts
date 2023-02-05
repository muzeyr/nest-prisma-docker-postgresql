export class CreateProductDto {
    title: string;
    price: number;
    authorId: number;
    published: boolean;
    categoryIds: number[];
}
