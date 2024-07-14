import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ name: 'IsLegalAge', async: true })
export class IsLegalAgeValidator implements ValidatorConstraintInterface {
  async validate(age: Date): Promise<boolean> {
    if (!age) {
      return false;
    }
    const ageDiff = Date.now() - age.getTime();
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970) >= 18;
  }

  defaultMessage() {
    return 'User must be at least 18 years old.';
  }
}
