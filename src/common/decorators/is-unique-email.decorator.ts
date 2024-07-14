import { registerDecorator, ValidationOptions } from 'class-validator';

import { IsUniqueEmailValidator } from '../validators/is-unique-email.validator';

export function IsUniqueEmail(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUniqueEmailValidator,
    });
  };
}
