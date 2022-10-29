import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreatePostRequest {
    @Field()
    title: string

    @Field()
    content: string
}
