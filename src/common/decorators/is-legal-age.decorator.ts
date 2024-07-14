import { registerDecorator, ValidationOptions } from 'class-validator';

import { IsLegalAgeValidator } from '../validators/is-legal-age.validator';

export function IsLegalAge(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsLegalAgeValidator,
    });
  };
}
