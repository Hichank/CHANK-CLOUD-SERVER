import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/modules/system/user.module';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './auth.dto';
import { JwtService } from '@nestjs/jwt';
import { CurrentUser } from './auth.decorator';

@ApiTags('授权')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  @UseGuards(AuthGuard('local'))
  @ApiOperation({ summary: '登录' })
  @Post('login')
  async login(@Body() Body: LoginDto, @CurrentUser() user: DocumentType<User>) {
    return {
      token: this.jwtService.sign({ id: String(user._id) }),
    };
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: '获取个人信息' })
  @Get('user')
  async user(@CurrentUser() user: DocumentType<User>) {
    return user;
  }
}
