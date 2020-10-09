import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';
import { Route } from './route.module';

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Role {
  @ApiProperty({ description: '权限名称', example: '超级管理员' })
  @prop()
  name: string;

  @ApiProperty({ description: '权限路由', example: [] })
  @prop({ ref: 'Route' })
  routes: Ref<Route>[];
}
