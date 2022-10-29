import { CreateAuthorInput } from './create-author.input'
import { Field, InputType, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateAuthorInput extends PartialType(CreateAuthorInput) {
    @Field(() => Int)
    id: number
}
