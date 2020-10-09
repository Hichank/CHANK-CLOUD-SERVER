import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/system/users/users.module';
import { CommonModule } from '@app/common';
import { AuthModule } from './modules/auth/auth.module';
import { RolesModule } from './modules/system/roles/roles.module';
import { MulterModule } from '@nestjs/platform-express';
import { RoutesModule } from './modules/system/routes/routes.module';
import { AdsModule } from './modules/operation/ads/ads.module';
import { ArticlesModule } from './modules/operation/articles/articles.module';
const MAO = require('multer-aliyun-oss');

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory() {
        return {
          storage: MAO({
            config: {
              region: process.env.REGION,
              accessKeyId: process.env.ACCESSKEYID,
              accessKeySecret: process.env.ACCESSKEYSECRET,
              bucket: process.env.BUCKET,
            },
          }),
        };
      },
    }),
    CommonModule,
    UsersModule,
    AuthModule,
    RolesModule,
    RoutesModule,
    AdsModule,
    ArticlesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
