import { Category } from "src/category/entities/category.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {Users} from '../../users/users.entity'
@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    content:string;

    @CreateDateColumn()
    created: Date

    @UpdateDateColumn()
    updated: Date

    @UpdateDateColumn()
    deleted:Date;

    
    @ManyToOne(type => Users, user => user.posts)
    user: Users

    @ManyToOne(type => Category, category => category.posts)
    category:Category

}
