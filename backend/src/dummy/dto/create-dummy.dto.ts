import { IsNotEmpty, IsString } from "class-validator"

export class CreateDummyDto {
    
    @IsNotEmpty({message: 'ต้องระบุชื่อ'})
    @IsString({message: 'ต้องระบุชื่อเป็นตัวอักษร'})
    fname: string

    @IsNotEmpty({message: 'ต้องระบุนามสกุล'})
    lname: string

}
