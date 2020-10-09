import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop } from '@typegoose/typegoose';

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Ad {
  @ApiProperty({ description: '广告标题', example: 'xxx降价啦!' })
  @prop()
  title: string;

  @ApiProperty({
    description: '广告图片',
    example: 'https://cn.vuejs.org/images/logo.png',
  })
  @prop()
  src: string;

  @ApiProperty({
    description: '排序',
    example: 1,
  })
  @prop()
  sort: number;

  @ApiProperty({
    description: '广告链接',
    example: 'https://baidu.com',
  })
  @prop()
  url: string;
}
