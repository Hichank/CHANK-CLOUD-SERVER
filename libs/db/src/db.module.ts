import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';

import { User } from './modules/user.module';
import { Post } from './modules/post.module';
import { Tag } from './modules/tag.module';

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
    TypegooseModule.forFeature([User, Post, Tag]),
  ],
  providers: [DbService],
  exports: [DbService, TypegooseModule.forFeature([User, Post, Tag])],
})
export class DbModule {}
