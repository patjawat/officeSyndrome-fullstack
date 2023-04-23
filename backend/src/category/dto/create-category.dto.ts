import { IsNotEmpty } from "class-validator"
import { CategoryGroup } from "src/category-group/entities/category-group.entity"

export class CreateCategoryDto {

    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    name: string
    
    categoryGroup: CategoryGroup
}
