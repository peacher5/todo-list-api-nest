import { IsNotEmpty } from 'class-validator'

export class AddTodoDto {
  @IsNotEmpty()
  description: string

  @IsNotEmpty()
  done: boolean
}
