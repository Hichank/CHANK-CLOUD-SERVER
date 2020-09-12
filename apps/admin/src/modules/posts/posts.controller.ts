import { Post } from '@libs/db/modules/post.module';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@ApiTags('文章模块')
@Crud({
  model: Post,
})
@Controller('posts')
export class PostsController {
  constructor(
    @InjectModel(Post) private readonly model: ReturnModelType<typeof Post>,
  ) {}
}
