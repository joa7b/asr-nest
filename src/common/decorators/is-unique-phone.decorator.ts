import { registerDecorator, ValidationOptions } from 'class-validator';

import { IsUniquePhoneValidator } from '../validators/is-unique-phone.validator';

export function IsUniquePhone(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUniquePhoneValidator,
    });
  };
}
