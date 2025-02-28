import { applyDecorators } from '@nestjs/common';
import { ValidationOptions, IsDefined, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { IdDto } from '../custom-dto/id.dto';

/** Custom Decorator - Checks if the value is a valid entity Id. */
export function IsEntityId(): PropertyDecorator {
  return applyDecorators(
    IsDefined(),
    ValidateNested(),
    Type(() => IdDto),
  );
}
