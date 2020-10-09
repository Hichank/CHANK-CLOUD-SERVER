import { Route } from '@libs/db/modules/system/route.module';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@ApiTags('权限路由模块')
@Crud({
  model: Route,
})
@Controller('routes')
export class RoutesController {
  constructor(
    @InjectModel(Route) private readonly model: ReturnModelType<typeof Route>,
  ) {}

  @Get('tree')
  tree() {
    return this.model
      .find({ parent: null })
      .populate({
        path: 'children',
        populate: {
          path: 'children',
        },
      })
      .exec();
  }
}
