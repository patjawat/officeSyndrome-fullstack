import { IsNotEmpty } from "class-validator"
import { Upload } from "src/uploads/entities/upload.entity"

export class CreatePatientDto {
    
    @IsNotEmpty()
    fname: string

    @IsNotEmpty()
    lname: string

    @IsNotEmpty()
    gender: string

    @IsNotEmpty()
    dob: string

    @IsNotEmpty()
    address: string

    @IsNotEmpty()
    birthday: Date

    photo: Upload

    
}
