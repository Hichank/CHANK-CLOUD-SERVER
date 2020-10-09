import { Controller, UseGuards } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport';
import { Ad } from '@libs/db/modules/operation/ad.module';

@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@ApiTags('广告模块')
@Crud({
  model: Ad,
})
@Controller('ads')
export class AdsController {
  constructor(
    @InjectModel(Ad) private readonly model: ReturnModelType<typeof Ad>,
  ) {}
}
