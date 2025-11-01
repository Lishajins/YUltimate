import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Child } from '../child/entities/child.entity';

@Entity()
export class Assessment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject: string;

  @Column()
  score: number;

  @ManyToOne(() => Child, (child) => child.assessments, { onDelete: 'CASCADE' })
  child: Child;
}
