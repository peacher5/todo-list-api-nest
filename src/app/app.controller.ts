import { Controller, Get } from '@nestjs/common'

import { AppService } from './app.service'
import { ServiceInfo } from './service-info.interface'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getVersion(): Promise<ServiceInfo> {
    return this.appService.getInfo()
  }
}
