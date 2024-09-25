import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private articlesRepository: Repository<Article>,
  ) {}

  findAll(): Promise<Article[]> {
    return this.articlesRepository.find();
  }

  findOne(id: number): Promise<Article> {
    return this.articlesRepository.findOneBy({ id });
  }

  create(createDto: CreateArticleDto): Promise<Article> {
    const article = this.articlesRepository.create(createDto); // Creates an entity instance with the DTO
    return this.articlesRepository.save(article); // Saves the entity to the database
  }

  async remove(id: number): Promise<void> {
    await this.articlesRepository.delete(id);
  }

  async update(id: number, article: Partial<Article>): Promise<Article> {
    await this.articlesRepository.update(id, article);
    return this.findOne(id);
  }
}
