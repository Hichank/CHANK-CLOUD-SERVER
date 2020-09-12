import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop } from '@typegoose/typegoose';

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @ApiProperty({ description: '姓名', example: 'Hichank' })
  @prop()
  name: string;

  @ApiProperty({ description: '年龄', example: 12 })
  @prop()
  age: number;

  @ApiProperty({ description: '邮箱', example: 'hichank@outlook.com' })
  @prop()
  email: string;

  @ApiProperty({ description: '密码', example: '123456' })
  @prop()
  password: string;
}
