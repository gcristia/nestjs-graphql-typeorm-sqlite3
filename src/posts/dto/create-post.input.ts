import { Field, InputType } from '@nestjs/graphql'
import { IsInt, IsNotEmpty } from 'class-validator'

@InputType()
export class CreatePostInput {
    @IsNotEmpty({
        message: 'Title is required',
    })
    @Field()
    title: string

    @Field({ nullable: true })
    content?: string

    @IsInt()
    @Field()
    authorId: number
}
