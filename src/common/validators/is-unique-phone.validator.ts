import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { User } from '../../user/user.entity';

import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ name: 'IsUniquePhone', async: true })
export class IsUniquePhoneValidator implements ValidatorConstraintInterface {
  async validate(phone: string): Promise<boolean> {
    try {
      return !(await User.findOne({ where: { phone } }));
    } catch {
      return false;
    }
  }

  defaultMessage() {
    return 'User phone must be unique.';
  }
}
