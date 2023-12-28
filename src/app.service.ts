import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postHello(): string {
    return 'Hello World but Post'
  }

  patchHello(): string {
    return 'Hello World but Patch'
  }

  putHello(): string {
    return 'Hello World but Put'
  }

  deleteHello(): string {
    return 'Hello World but Delete'
  }
  
}
