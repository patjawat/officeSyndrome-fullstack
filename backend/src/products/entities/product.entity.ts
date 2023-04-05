import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    find(arg0: {}): Product[] | PromiseLike<Product[]> {
      throw new Error('Method not implemented.');
    }
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    title:string;

    @Column()
    color:String;

    @Column({type:'float',nullable:false})
    price:number;
}
