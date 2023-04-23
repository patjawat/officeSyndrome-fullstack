import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, OneToMany, BeforeInsert } from 'typeorm';
import { UserRole } from './Roles';
import { Post } from 'src/post/entities/post.entity';
import { Exclude } from 'class-transformer';
import * as crypto from 'crypto';

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

    @Exclude()
    public currentHashedRefreshToken?: string;

    @Column({ nullable: true,name:'refreshtoken' })
    refreshToken: string;
  
    @Column({ type: 'date', nullable: true, name:'refreshtokenexp' })
    refreshTokenExp: string;

    @Column({ type: "enum", enum: UserRole, default: UserRole.USER })
    role: UserRole;

    @OneToMany(type => Post, posts => posts.user)
    posts: Post[]

    // @BeforeInsert()
    // hashPassword() {
    // this.password = crypto.createHmac('sha256', this.password).digest('hex');
    // }

}
