import { User } from '@libs/db/modules/user.module';
import { Controller, UseGuards } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport';


@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@ApiTags('用户模块')
@Crud({
  model: User,
})
@Controller('users')
export class UsersController {
  constructor(
    @InjectModel(User) private readonly model: ReturnModelType<typeof User>,
  ) {}
}
