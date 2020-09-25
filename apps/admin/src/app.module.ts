import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { CommonModule } from '@app/common';
import { AuthModule } from './modules/auth/auth.module';
import { RolesModule } from './modules/roles/roles.module';
import { MulterModule } from '@nestjs/platform-express';
import { RoutesModule } from './modules/routes/routes.module';
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
