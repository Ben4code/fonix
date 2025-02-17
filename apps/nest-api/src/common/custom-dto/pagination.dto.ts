import { IsOptional } from 'class-validator';
import { IsPositiveInt } from '../decorators/is-positive-int.decorator';

export class PaginationDto {
  @IsPositiveInt()
  @IsOptional()
  readonly limit: number;

  @IsPositiveInt()
  @IsOptional()
  readonly offset: number;
}
