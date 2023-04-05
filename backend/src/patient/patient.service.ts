import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  UseInterceptors,
  forwardRef,
} from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Repository } from 'typeorm';
import { Patient } from './entities/patient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UploadsService } from 'src/uploads/uploads.service';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';


@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    @Inject(forwardRef(() => UploadsService))
    private patientRepository: Repository<Patient>,
    private uploadService: UploadsService,
  ) { }


  async paginate(options: IPaginationOptions): Promise<Pagination<Patient>> {
    return paginate<Patient>(this.patientRepository, options);
  }

  async create(createPatientDto: CreatePatientDto, file): Promise<Patient> {
    const { fname, lname, gender, birthday, address } = createPatientDto;

    try {
      const upload = await this.uploadService.create(file);
      const patient = await this.patientRepository.create({
        fname,
        lname,
        gender,
        birthday,
        address,
        upload,
      });
      return await this.patientRepository.save(patient);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'เกิดข้อผิดพลาด',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }


  async findAll(): Promise<Patient[]> {
    return await this.patientRepository.find({
      order: { created: "DESC" } ,
      relations: ['upload'],
    });
  }

  async findOne(cid: string): Promise<Patient> {
    try {
      return await this.patientRepository.findOne({ where: { cid: cid } });
    } catch (error) {
      return null;
    }
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
