import {
  ArrayNotEmpty,
  ArrayUnique,
  IsOptional,
  Length,
} from 'class-validator';
import { IdDto } from 'src/common/custom-dto/id.dto';
import { IsCurrency } from 'src/common/decorators/is-currency.decorator';
import { IsEntityId } from 'src/common/decorators/is-entity-id.decorator';
import { idDtoIdentifier } from 'src/utils/id-property.utils';

export class CreateProductDto {
  @Length(2, 50)
  readonly name: string;

  @IsOptional()
  @Length(1, 500)
  readonly description: string;

  @IsCurrency()
  readonly price: number;

  @ArrayNotEmpty()
  @ArrayUnique(idDtoIdentifier)
  @IsEntityId()
  readonly categories: IdDto[];
}
