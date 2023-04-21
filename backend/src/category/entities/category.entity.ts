import { Post } from 'src/post/entities/post.entity';
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    title:string;

    @OneToMany(type => Post, posts => posts.category)
    posts: Post[]
}
