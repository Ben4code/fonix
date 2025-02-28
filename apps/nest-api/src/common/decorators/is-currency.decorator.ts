import { applyDecorators } from '@nestjs/common';
import { IsPositive, IsNumber, ValidationOptions } from 'class-validator';

/** Custom Decorator - Checks if the value is a positive number greater than zero. */
export function IsCurrency(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return applyDecorators(
    IsNumber({ maxDecimalPlaces: 2 }, validationOptions),
    IsPositive(validationOptions),
  );
}
