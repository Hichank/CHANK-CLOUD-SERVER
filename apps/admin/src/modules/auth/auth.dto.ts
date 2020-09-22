import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ description: '用户名', example: 'admin' })
  username: String;

  @ApiProperty({ description: '密码', example: '666666' })
  password: String;
}
