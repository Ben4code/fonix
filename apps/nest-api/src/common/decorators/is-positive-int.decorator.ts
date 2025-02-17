import { applyDecorators } from '@nestjs/common';
import { IsInt, IsPositive, ValidationOptions } from 'class-validator';

/** Custom Decorator - Checks if the value is a positive number greater than zero. */
export function IsPositiveInt(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return applyDecorators(
    IsInt(validationOptions),
    IsPositive(validationOptions),
  );
}
