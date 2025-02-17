import { IsPositiveInt } from '../decorators/is-positive-int.decorator';

export class IdDto {
  @IsPositiveInt()
  id: number;
}
