import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop } from '@typegoose/typegoose';

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Role {
  @ApiProperty({ description: '权限名称', example: '用户管理' })
  @prop()
  name: string;
}
