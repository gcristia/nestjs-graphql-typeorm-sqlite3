import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateAuthorInput {
    @Field(() => String, { description: 'Name of Author' })
    name: string
}
