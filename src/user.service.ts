import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Users';
  }

  postHello(): string {
    return 'Users but Post'
  }

}
