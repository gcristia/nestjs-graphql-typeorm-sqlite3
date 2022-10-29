import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { join } from 'path'
import { AppService } from './app.service'
import { PostsModule } from './posts/posts.module'
import { AppController } from './app.controller'
import { AuthorsModule } from './authors/authors.module'

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        }),
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'database.sqlite',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
        PostsModule,
        AuthorsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
