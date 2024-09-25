import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  publishedAt: Date;

  @Column({ nullable: true })
  tags: string;

  @Column({ nullable: true }) // Allow this to be nullable
  file?: string; // Ensure this matches your DTO
}
