import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-hello-world')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('post-hello-world')
  postHello(): string{
    return this.appService.postHello();
  }

  @Patch('patch-my-id')
  patchHello(): string{
    return this.appService.patchHello();
  }
  
  @Put('put-my-id')
  puthHello(): string{
    return this.appService.putHello();
  }

  @Delete('delete-my-id')
  deleteHello(): string{
    return this.appService.deleteHello();
  }
}
