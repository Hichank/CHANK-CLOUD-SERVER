import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  login(): any {
    return {
      data: {
        token: 'LUOHAICHANG',
        id: '1',
        username: '测试人员',
      },
    };
  }

  auth(): any {
    return {
      data: {
        SUCCESS_101: true,
        SUCCESS_1011: true,
        SUCCESS_1012: true,
      },
    };
  }
}
