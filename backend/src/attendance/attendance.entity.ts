import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Child } from '../child/entities/child.entity';

@Entity()
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  status: string;

  @ManyToOne(() => Child, (child) => child.attendances, { onDelete: 'CASCADE' })
  child: Child;
}
