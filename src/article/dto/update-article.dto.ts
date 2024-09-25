// src/article/dto/update-article.dto.ts
import { IsString, IsOptional } from 'class-validator';

export class UpdateArticleDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsString()
  tags?: string;
}
