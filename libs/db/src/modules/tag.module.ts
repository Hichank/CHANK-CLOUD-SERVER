import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop } from '@typegoose/typegoose';

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Tag {
  @ApiProperty({ description: '标签名', example: '恐怖' })
  @prop()
  name: string;

  @ApiProperty({ description: '标签描述', example: '专门吓人的标签' })
  @prop()
  description: string;
}
