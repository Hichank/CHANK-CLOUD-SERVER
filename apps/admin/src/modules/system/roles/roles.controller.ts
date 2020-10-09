import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { Role } from '@libs/db/modules/system/role.module';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';

@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@ApiTags('权限模块')
@Crud({
  model: Role,
})
@Controller('roles')
export class RolesController {
  constructor(
    @InjectModel(Role) private readonly model: ReturnModelType<typeof Role>,
  ) {}
}
