import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('应用')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  login(): any {
    return this.appService.login();
  }

  @Post('auth')
  auth(): any {
    return this.appService.auth();
  }
}
