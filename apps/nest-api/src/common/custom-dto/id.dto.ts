import {
  IsInt,
  IsPositive,
  ValidatorConstraintInterface,
} from 'class-validator';

export class IdDto {
  @IsInt()
  @IsPositive()
  id: number;
}
