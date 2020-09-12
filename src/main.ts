import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { AppModule } from 'app/app.module'
import { Config } from 'config.schema'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(configService.get<number>(Config.PORT))
}

bootstrap()
