import { PassportStrategy } from '@nestjs/passport';
import { Strategy, StrategyOptions, ExtractJwt } from 'passport-jwt';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/modules/user.module';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User) private userModel: ReturnModelType<typeof User>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET,
    } as StrategyOptions);
  }

  async validate({ id }) {
    const user = await this.userModel.findById(id, {
      
    });
    console.log(user);
    return await this.userModel.findById(id);
  }
}
