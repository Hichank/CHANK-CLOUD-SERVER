import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { PostsModule } from './modules/posts/posts.module';
import { TagsModule } from './modules/tags/tags.module';

@Module({
  imports: [DbModule, UsersModule, PostsModule, TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
