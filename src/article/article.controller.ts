import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { S3Service } from './s3.service';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Articles')
@Controller('articles')
export class ArticleController {
  constructor(
    private readonly articleService: ArticleService,
    private readonly s3Service: S3Service,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all articles' })
  findAll(): Promise<Article[]> {
    return this.articleService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get single article' })
  findOne(@Param('id') id: string): Promise<Article> {
    return this.articleService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Create articles' })
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() createArticleDto: CreateArticleDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<Article> {
    let fileUrl: string | null = null;

    if (file) {
      fileUrl = await this.s3Service.uploadFile(file);
    }

    createArticleDto.file = fileUrl;

    const article = await this.articleService.create(createArticleDto);

    return article;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete articles' })
  remove(@Param('id') id: string): Promise<void> {
    return this.articleService.remove(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update articles' })
  update(
    @Param('id') id: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    return this.articleService.update(+id, updateArticleDto);
  }
}
