import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';
import { WhatIsIt } from '@typegoose/typegoose/lib/internal/constants';
import { Tag } from './tag.module';

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Post {
  @ApiProperty({ description: '标题', example: '故事会' })
  @prop()
  title: string;

  @ApiProperty({ description: '副标题', example: '这是一个讲故事的文章' })
  @prop()
  subtitle: string;

  @ApiProperty({ description: '标签', example: [] })
  @prop({ ref: Tag }, WhatIsIt.ARRAY)
  tag: Ref<Tag>[];

  @ApiProperty({ description: '内容', example: '从前有一个程序员...' })
  @prop()
  content: string;
}
