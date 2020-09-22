import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop } from '@typegoose/typegoose';
import { hashSync } from 'bcryptjs';

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @ApiProperty({ description: '姓名', example: 'Hichank' })
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
}
