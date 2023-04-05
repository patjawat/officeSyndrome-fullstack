
import { IsNotEmpty } from "class-validator";
import { Category } from 'src/category/entities/category.entity';

export class CreatePostDto {

    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    content: string
    
    category: Category

}