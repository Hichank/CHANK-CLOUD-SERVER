import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';

import { User } from './modules/user.module';
import { Role } from './modules/role.module';

@Global()
@Module({
  imports: [
    TypegooseModule.forRootAsync({
      useFactory() {
        return {
          uri: process.env.DB,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false,
        };
      },
    }),
    TypegooseModule.forFeature([User, Role]),
  ],
  providers: [DbService],
  exports: [DbService, TypegooseModule.forFeature([User, Role])],
})
export class DbModule {}
