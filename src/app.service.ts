import { Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './users/dto/create-user.dto';
import { User, UserDocument } from './users/entities/user.entity';

@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private readonly AppModule: Model<UserDocument>) { }

  private readonly logger = new Logger(AppService.name)

  create(createUserDto: CreateUserDto) {
    try {
      const user = new this.AppModule(createUserDto);
      return user.save();
    } catch (error) {
      this.logger.error(`ERROR CRITICAL CREAT USER: ${JSON.stringify(createUserDto)} || ${JSON.stringify(error.message)} `)
      throw new RpcException(error.message)
    }
  }
}
