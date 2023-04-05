import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, OneToMany } from 'typeorm';
import { UserRole } from './Roles';
import { Post } from 'src/post/entities/post.entity';

@Entity()
export class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    username: string

    @Column()
    password: string

    @CreateDateColumn()
    created: Date

    @UpdateDateColumn()
    updated: Date

    @Column({ type: "enum", enum: UserRole, default: UserRole.USER })
    role: UserRole;

    @OneToMany(type => Post, posts => posts.user)
    posts: Post[]
}
