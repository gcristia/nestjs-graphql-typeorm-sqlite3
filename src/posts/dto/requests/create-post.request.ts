import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty } from 'class-validator'

@InputType()
export class CreatePostRequest {
    @IsNotEmpty()
    @Field()
    title: string

    @Field({ nullable: true })
    content?: string
}
