import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { ServiceInfo } from './service-info.interface'
import { Config } from 'config.schema'

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getInfo(): ServiceInfo {
    return {
      appName: this.configService.get(Config.APP_NAME),
      version: this.configService.get(Config.VERSION),
      commitID: this.configService.get(Config.COMMIT_ID)
    }
  }
}
