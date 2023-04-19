import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dummy {
    @PrimaryGeneratedColumn('uuid')
    id:number;

    @Column({ comment: 'ชื่อ', nullable: false, default: null })
    fname:string;

    @Column({ comment: 'นามสกุล', nullable: false, default: null })
    lname:string;

    @Column({ comment: 'โทรศัพท์', nullable: false, default: null })
    phone:number;

}
