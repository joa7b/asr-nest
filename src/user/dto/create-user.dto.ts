import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsDate,
  IsEnum,
  IsUrl,
  IsOptional,
} from 'class-validator';

import { SubscriptionRole } from '../user.entity';
import { IsValidDDD } from '../../common/decorators/is-valid-ddd.decorator';
import { IsLegalAge } from '../../common/decorators/is-legal-age.decorator';
import { IsUniquePhone } from '../../common/decorators/is-unique-phone.decorator';
import { IsUniqueEmail } from '../../common/decorators/is-unique-email.decorator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @IsUniqueEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsDate()
  @IsNotEmpty()
  @IsLegalAge()
  birthdate: Date;

  @IsEnum(SubscriptionRole)
  subscription: string;

  @IsString()
  @IsOptional()
  biography: string;

  @IsString()
  @IsNotEmpty()
  @IsValidDDD()
  ddd: string;

  @IsString()
  @IsNotEmpty()
  @IsUniquePhone()
  phone: string;

  @IsUrl()
  @IsOptional()
  avatar: string;

  constructor(partial: Partial<CreateUserDto>) {
    Object.assign(this, partial);
  }
}
