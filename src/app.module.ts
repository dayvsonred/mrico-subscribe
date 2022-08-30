import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User, UserSchema } from './users/entities/user.entity';
import * as dotenv from 'dotenv'
dotenv.config()

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
