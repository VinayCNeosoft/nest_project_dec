import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-hello-world')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('post-http-code')
  postHello(): string{
    return this.appService.postHello();
  }
  
}
