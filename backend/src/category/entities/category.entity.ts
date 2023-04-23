import { CategoryGroup } from 'src/category-group/entities/category-group.entity';
import { Post } from 'src/post/entities/post.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @OneToMany(type => Post, posts => posts.category)
    posts: Post[]

    @ManyToOne(type => CategoryGroup, categoryGroup => categoryGroup.categorys)
    categoryGroup:CategoryGroup
}
