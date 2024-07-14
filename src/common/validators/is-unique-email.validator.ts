import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';

import { User } from '../../user/user.entity';

@Injectable()
@ValidatorConstraint({ name: 'IsUniqueEmail', async: true })
export class IsUniqueEmailValidator implements ValidatorConstraintInterface {
  async validate(email: string): Promise<boolean> {
    try {
      return !(await User.findOne({ where: { email } }));
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  defaultMessage() {
    return 'User email must be unique.';
  }
}
