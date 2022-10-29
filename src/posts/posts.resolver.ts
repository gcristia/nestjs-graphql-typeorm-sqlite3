import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { PostsService } from './posts.service'
import { Post } from './entities/post.entity'
import { CreatePostInput } from './dto/create-post.input'
import { Author } from '../authors/entities/author.entity'

@Resolver(() => Post)
export class PostsResolver {
    constructor(private postsService: PostsService) {}

    @Query(() => [Post])
    posts() {
        return this.postsService.findAll()
    }

    @Query(() => Post)
    post(@Args('id', { type: () => Int }) id: number) {
        return this.postsService.findProductById(id)
    }

    @ResolveField(() => Author)
    author(@Parent() post: Post) {
        return this.postsService.getAuthor(post.authorId)
    }

    @Mutation(() => Post)
    createPost(@Args('postRequest') postRequest: CreatePostInput) {
        return this.postsService.createPost(postRequest)
    }
}
