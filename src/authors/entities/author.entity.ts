import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Post } from '../../posts/entities/post.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity('authors')
@ObjectType()
export class Author {
    @PrimaryGeneratedColumn()
    @Field(() => Int, { description: 'Id del Author' })
    id: number

    @Column()
    @Field(() => String, { description: 'Name of Author' })
    name: string

    @OneToMany(() => Post, (post) => post.author)
    @Field(() => [Post], { nullable: true, description: 'Posts of Author' })
    posts: Post[]
}
