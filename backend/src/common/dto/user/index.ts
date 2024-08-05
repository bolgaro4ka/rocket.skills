import { IsEmail, IsString } from "class-validator";

export class CreateUserDTO {
    @IsEmail()
    email: string;
    @IsString()
    password: string;
    @IsString()
    name: string;
}

export class LoginUserDTO {
    @IsEmail()
    email: string;
    @IsString()
    password: string;
}