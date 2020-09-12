import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TodosModule } from 'todos/todos.module'
import { validationSchema } from 'config.schema'

@Module({
  imports: [ConfigModule.forRoot({ validationSchema }), TodosModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
