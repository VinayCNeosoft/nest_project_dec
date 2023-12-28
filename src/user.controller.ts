import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('get-users')
  getHello(): string {
    return this.userService.getHello();
  }

  @Post('post-users')
  postHello(): string{
    return this.userService.postHello();
  }
}
