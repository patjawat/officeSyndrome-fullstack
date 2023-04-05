import { Expose } from "class-transformer";
import { Upload } from "src/uploads/entities/upload.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

enum Gender {
  Male,
  Female,
  Other
}

@Entity()
export class Patient {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Expose()
  @Column({ comment: 'ชื่อ', nullable: true, default: null })
  hn: string

  @Column({ comment: 'ชื่อ', nullable: true, default: null })
  fname: string

  @Column({ comment: 'นามสกุล', nullable: true, default: null })
  lname: string

  @Column({ comment: 'เพศ', nullable: true, default: null })
  gender: string

  @Column({ comment: 'วันเกิด', nullable: true, default: null })
  birthday: Date;

  @Column({ comment: 'กรุ๊ปเลือด', nullable: true, default: null })
  dob: string

  @Column({ comment: 'ที่อยู่', nullable: true, default: null })
  address: string

  @Column({ comment: 'โทรศัพท์', nullable: true, default: null })
  phone: string

  @Column({ comment: 'บัตรประชาชน', nullable: true, default: null })
  cid: string

  @Column({ nullable: true, default: null })
  status: string

  @Column({ nullable: true, default: null })
  photo: string

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  @Column({ nullable: true, default: null })
  createdBy: string

  @Column({ nullable: true, default: null })
  updatedBy: string

  // @OneToOne(type => Upload, patient => patient.photo )
  // photo:Upload
  @OneToOne(() => Upload)
  @JoinColumn()
  upload: Upload

  // @OneToOne(() => photo)
  // @JoinColumn()
  // profile: Profile


  // @OneToOne(() => Upload, (upload) => upload.patient) // specify inverse side as a second parameter
  // upload: Upload


  // @ManyToOne(type => Category, category => category.posts)
  // category:Category

}
