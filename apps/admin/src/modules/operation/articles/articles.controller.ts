
import { Controller, UseGuards } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport';
import { Article } from '@libs/db/modules/operation/article.module';

@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@ApiTags('文章模块')
@Crud({
  model: Article,
})
@Controller('articles')
export class ArticlesController {
  constructor(
    @InjectModel(Article) private readonly model: ReturnModelType<typeof Article>,
  ) {}
}
