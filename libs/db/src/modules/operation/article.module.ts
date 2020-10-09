import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop } from '@typegoose/typegoose';

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Article {
  @ApiProperty({
    description: '排序',
    example: 1,
  })
  @prop()
  sort: number;
  
  @ApiProperty({ description: '文章标题', example: '今天打老虎!' })
  @prop()
  title: string;

  @ApiProperty({
    description: '文章副标题',
    example: '老虎名字: xxx',
  })
  @prop()
  subtitle: string;

  @ApiProperty({
    description: '文章内容',
    example: 'xxx',
  })
  @prop()
  content: string;
}
