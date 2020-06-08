import { Injectable, HttpException } from '@nestjs/common'
import { Todo } from './todos.interface'
import { AddTodoDto } from './dto/add-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'

@Injectable()
export class TodosService {
  private readonly todos: Todo[] = []

  getTodoList(): Todo[] {
    return this.todos
  }

  getTodoById(id: number): Todo {
    const result = this.todos.find(todo => todo.id === id)

    if (result) return result

    throw new Error(`Todo (id=${id}) does not exist`)
  }

  addTodo(todo: AddTodoDto): Todo {
    const id = this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1
    const result = { id, ...todo }

    this.todos.push(result)
    return result
  }

  updateTodo(id: number, todo: UpdateTodoDto): Todo {
    const index = this.todos.findIndex(todo => todo.id === id)

    if (index === -1) {
      throw new Error(`Todo (id=${id}) does not exist`)
    }

    const result = { id, ...todo }
    this.todos[index] = result
    return result
  }

  deleteTodo(id: number): boolean {
    const index = this.todos.findIndex(todo => todo.id === id)

    if (index === -1) {
      throw new Error(`Todo (id=${id}) does not exist`)
    }

    this.todos.splice(index, 1)
    return true
  }
}
