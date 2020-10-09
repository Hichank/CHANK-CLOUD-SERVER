import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';

import { User } from './modules/system/user.module';
import { Role } from './modules/system/role.module';
import { Route } from './modules/system/route.module';

import { Ad } from './modules/operation/ad.module';
import { Article } from './modules/operation/article.module';

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
    TypegooseModule.forFeature([User, Role, Route, Ad, Article]),
  ],
  providers: [DbService],
  exports: [
    DbService,
    TypegooseModule.forFeature([User, Role, Route, Ad, Article]),
  ],
})
export class DbModule {}
