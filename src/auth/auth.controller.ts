import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    try {
      if (!signInDto.email || !signInDto.password) {
        throw new Error('Invalid email or password');
      }
      return this.authService.signIn(signInDto.email, signInDto.password);
    } catch (error) {
      return new InternalServerErrorException(error.message);
    }
  }
}
