import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';
import { hashSync } from 'bcryptjs';
import { Role } from './role.module';

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @ApiProperty({ description: '用户名', example: 'Hichank' })
  @prop()
  username: string;

  @ApiProperty({ description: '密码', example: '123456' })
  @prop({
    select: false,
    get(value) {
      return value;
    },
    set(value) {
      return (value && hashSync(value)) || value;
    },
  })
  password: string;

  @ApiProperty({
    description: '头像',
    example: 'https://cn.vuejs.org/images/logo.png',
  })
  @prop()
  avatar: string;

  @ApiProperty({ description: '权限', example: [] })
  @prop({ ref: 'Role' })
  roles: Ref<Role>[];
}
