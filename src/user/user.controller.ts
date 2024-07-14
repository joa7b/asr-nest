import {
  Controller,
  Post,
  Body,
  InternalServerErrorException,
} from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() createUserBody: CreateUserDto) {
    try {
      return await this.userService.createUser(createUserBody);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
