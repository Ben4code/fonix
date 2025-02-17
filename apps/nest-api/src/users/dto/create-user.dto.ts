import {
  IsString,
  IsNumber,
  Length,
  IsEmail,
  IsPhoneNumber,
  IsMobilePhone,
} from 'class-validator';

export class CreateUserDto {
  @Length(2, 50)
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsMobilePhone()
  readonly phone: string;

  @IsString()
  readonly password: string;
}
