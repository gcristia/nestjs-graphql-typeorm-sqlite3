import { Injectable } from '@nestjs/common'
import { Post } from './post.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreatePostRequest } from './dto/requests/create-post.request'

@Injectable()
export class PostsService {
    constructor(@InjectRepository(Post) private readonly postsRepository: Repository<Post>) {}

    findAll(): Promise<Post[]> {
        return this.postsRepository.find()
    }

    findProductById(id: number): Promise<Post> {
        return this.postsRepository.findOne({ where: { id } })
    }

    createPost(post: CreatePostRequest): Promise<Post> {
        const newPost = this.postsRepository.create(post)
        return this.postsRepository.save(newPost)
    }
}
