import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Route {
  @ApiProperty({ description: '权限路由父级路由', example: null })
  @prop({ ref: 'Route', default: null })
  parent: string;

  @ApiProperty({ description: '权限路由名称', example: '系统管理' })
  @prop()
  name: string;

  @ApiProperty({ description: '权限路由验证码', example: 'ROUTE-SYSTEM' })
  @prop()
  code: string;

  @ApiProperty({ description: '权限路由子集路由', example: [] })
  @prop({ ref: 'Route' })
  children: Ref<Route>[];
}
