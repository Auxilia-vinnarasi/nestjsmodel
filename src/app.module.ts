// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { MongooseModule } from '@nestjs/mongoose';
// import { UserService } from './user/user.service';
// import { UserController } from './user/user.controller';
// import { UserModule } from './user/user.module';


// @Module({
//   imports: [MongooseModule.forRoot('mongodb://0.0.0.0:27017',{dbName: 'nestjsmodel'}), UserModule,
// ],
//   controllers: [AppController, UserController],
//   providers: [AppService, UserService],
// })
// export class AppModule {}


import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0:27017',{dbName: 'nestjsmodel'}),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
