import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from 'typeorm';

export class Empoyee {
    find(arg0: {}): Empoyee[] | PromiseLike<Empoyee[]> {
        throw new Error('Method not implemented.');
      }

    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    title!: string;

    @Column()
    completed!: boolean;
}
