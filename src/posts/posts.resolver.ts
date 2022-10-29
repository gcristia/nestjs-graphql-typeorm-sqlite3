import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PostsService } from './posts.service'
import { Post } from './post.entity'
import { CreatePostRequest } from './dto/requests/create-post.request'

@Resolver()
export class PostsResolver {
    constructor(private postsService: PostsService) {}

    @Query((returns) => [Post])
    posts() {
        return this.postsService.findAll()
    }

    @Query((returns) => Post)
    post(@Args('id', { type: () => Int }) id: number) {
        return this.postsService.findProductById(id)
    }

    @Mutation((returns) => Post)
    createPost(@Args('postRequest') postRequest: CreatePostRequest) {
        return this.postsService.createPost(postRequest)
    }
}
