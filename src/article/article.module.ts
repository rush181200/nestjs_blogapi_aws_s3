import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { Article } from './article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { S3Service } from './s3.service';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticleService, S3Service],
  controllers: [ArticleController],
})
export class ArticleModule {}
