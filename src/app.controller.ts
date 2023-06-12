import { Controller, Get } from '@nestjs/common';
import { AppInit, AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): AppInit {
    return this.appService.getHello();
  }
}
