import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Author } from '../../authors/entities/author.entity'

@Entity('posts')
@ObjectType()
export class Post {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number

    @Column()
    @Field()
    title: string

    @Column({ type: 'text', nullable: true })
    @Field({ nullable: true })
    content?: string

    @Column()
    @Field(() => Int, { description: 'Id of Author' })
    authorId: number

    @ManyToOne(() => Author, (author) => author.posts)
    @Field(() => Author)
    author: Author
}
