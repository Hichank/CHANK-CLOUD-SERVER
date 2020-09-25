import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop } from '@typegoose/typegoose';

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Route {
  @ApiProperty({ description: '权限路由名称', example: '系统设置' })
  @prop()
  name: string;

  @ApiProperty({ description: '权限路由验证码', example: 'ROUTE-SYSTEM' })
  @prop()
  code: string;
}
