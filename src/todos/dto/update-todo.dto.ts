import { IsNotEmpty } from 'class-validator'

export class UpdateTodoDto {
  @IsNotEmpty()
  description: string

  @IsNotEmpty()
  done: boolean
}
