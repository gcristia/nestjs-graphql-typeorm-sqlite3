import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common'

import { Author } from './entities/author.entity'
import { UpdateAuthorInput } from './dto/update-author.input'
import { CreateAuthorInput } from './dto/create-author.input'

@Injectable()
export class AuthorsService {
    constructor(@InjectRepository(Author) private authorRepository: Repository<Author>) {}

    create(createAuthorInput: CreateAuthorInput) {
        const newAuthor = this.authorRepository.create(createAuthorInput)
        return this.authorRepository.save(newAuthor)
    }

    findAll() {
        return this.authorRepository.find()
    }

    findOne(id: number) {
        return this.authorRepository.findOne({ where: { id } })
    }

    update(id: number, updateAuthorInput: UpdateAuthorInput) {
        return `This action updates a #${id} author`
    }

    remove(id: number) {
        return `This action removes a #${id} author`
    }
}
