import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from '@libs/db';
import { JwtModule } from '@nestjs/jwt';
import { CommonService } from './common.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.registerAsync({
      useFactory() {
        return {
          secret: process.env.SECRET,
          signOptions: { expiresIn: '8h' },
        };
      },
    }),
    DbModule,
  ],
  providers: [CommonService],
  exports: [CommonService, JwtModule],
})
export class CommonModule {}
