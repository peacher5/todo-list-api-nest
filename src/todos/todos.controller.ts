import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Delete,
  Put
} from '@nestjs/common'
import { TodosService } from './todos.service'
import { Todo } from './todos.interface'
import { AddTodoDto } from './dto/add-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  async getTodoList(): Promise<Todo[]> {
    return this.todoService.getTodoList()
  }

  @Get(':id')
  async getTodoById(@Param('id', ParseIntPipe) id: number): Promise<Todo> {
    try {
      return this.todoService.getTodoById(id)
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.NOT_FOUND)
    }
  }

  @Post()
  async addTodo(@Body() todo: AddTodoDto): Promise<Todo> {
    return this.todoService.addTodo(todo)
  }

  @Put(':id')
  async updateTodo(@Param('id', ParseIntPipe) id: number, @Body() todo: UpdateTodoDto): Promise<Todo> {
    return this.todoService.updateTodo(id, todo)
  }

  @Delete(':id')
  async deleteTodo(@Param('id', ParseIntPipe) id: number): Promise<void> {
    try {
      this.todoService.deleteTodo(id)
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.NOT_FOUND)
    }
  }
}
