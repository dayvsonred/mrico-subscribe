import { Controller, Get, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserDto } from './users/dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  private readonly logger = new Logger(AppController.name)


  @EventPattern('create-user')
  async createUser(@Payload() createUserDto: CreateUserDto) {

    this.logger.log(`created user: ${JSON.stringify(createUserDto)}`)

    this.appService.create(createUserDto)

  }

}
