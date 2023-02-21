// import { Module } from '@nestjs/common';

// @Module({})
// export class UserModule {}

import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import {UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import {UserSchema} from '../entity/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: "user", schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}