// src/article/dto/create-article.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The title of the article' })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The content of the article' })
  content: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'The tags of the article' })
  tags?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'The file URL of the article' })
  file?: string; // Ensure this is a lowercase string
}
