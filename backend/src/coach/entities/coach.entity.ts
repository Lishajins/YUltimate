import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Coach {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  specialization: string;

  @Column()
  experience: number; // in years

  @Column({ nullable: true })
  contact: string;
}
