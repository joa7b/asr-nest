import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validateOrReject } from 'class-validator';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { validationError } from '../utils/validation-error.util';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserBody: CreateUserDto): Promise<User> {
    try {
      await validateOrReject(
        new CreateUserDto({
          ...createUserBody,
          email: createUserBody.email.toLowerCase(),
          birthdate: new Date(createUserBody.birthdate),
        }),
      );
      const user = this.userRepository.create(createUserBody);
      return await this.userRepository.save(user);
    } catch (error) {
      validationError(error);
    }
  }

  async findOne(email: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { email } });
  }
}
