import { Category } from "src/category/entities/category.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CategoryGroup {
        @PrimaryGeneratedColumn()
        id:number;

        @Column()
        name:string;

        @Column()
        title:string;

        // @OneToMany(type => Category, categorys => category.categoryGroup)
        // categorys: Category[]

        @OneToMany(type => Category, categorys => categorys.categoryGroup)
        categorys: Category[]
    
}
