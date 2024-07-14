import { registerDecorator, ValidationOptions } from 'class-validator';

import { IsValidDDDValidator } from '../validators/is-valid-ddd.validator';

export function IsValidDDD(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidDDDValidator,
    });
  };
}
