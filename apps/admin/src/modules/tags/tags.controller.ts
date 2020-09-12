import { Tag } from '@libs/db/modules/tag.module';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@ApiTags('标签模块')
@Crud({
  model: Tag,
})
@Controller('tags')
export class TagsController {
  constructor(
    @InjectModel(Tag) private readonly model: ReturnModelType<typeof Tag>,
  ) {}
}
