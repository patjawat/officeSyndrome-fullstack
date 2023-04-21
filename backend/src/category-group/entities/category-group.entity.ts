import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CategoryGroup {
        @PrimaryGeneratedColumn()
        id:number;

        @Column()
        name:string;
}
