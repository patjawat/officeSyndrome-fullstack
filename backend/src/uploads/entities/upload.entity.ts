import { Patient } from "src/patient/entities/patient.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('uploads')
export class Upload {

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({ nullable: true, default: null})
    ref:string

    @Column({ nullable: true, default: null})
    originalname:string

    @Column({ nullable: true, default: null})
    filename:string

    @Column({ nullable: true, default: null})
    path:string

    @Column({ nullable: true, default: null})
    size:number

    @Column({ nullable: true, default: null})
    type:string

    @Column({ nullable: true, default: null})
    status:string

    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    @DeleteDateColumn()
    deletedAt?: Date;
    
    @Column({ nullable: true, default: null})
    createdBy:string

    @Column({ nullable: true, default: null})
    updatedBy:string

    // @OneToOne(type => Patient, patients => patients.photo)
    // patients: Patient

    // @OneToOne(() => Patient, (patient) => patient.upload) // specify inverse side as a second parameter
    // patient: Patient

}
