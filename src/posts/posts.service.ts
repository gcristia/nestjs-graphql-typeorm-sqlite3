import { Injectable } from '@nestjs/common'
import { Post } from './entities/post.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreatePostInput } from './dto/create-post.input'
import { Author } from '../authors/entities/author.entity'
import { AuthorsService } from '../authors/authors.service'

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private readonly postsRepository: Repository<Post>,
        private readonly authorService: AuthorsService
    ) {}

    findAll(): Promise<Post[]> {
        return this.postsRepository.find()
    }

    findProductById(id: number): Promise<Post> {
        return this.postsRepository.findOne({ where: { id } })
    }

    createPost(post: CreatePostInput): Promise<Post> {
        const newPost = this.postsRepository.create(post)
        return this.postsRepository.save(newPost)
    }

    getAuthor(authorId: number): Promise<Author> {
        return this.authorService.findOne(authorId)
    }
}
