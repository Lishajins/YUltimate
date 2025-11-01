import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Attendance } from '../../attendance/attendance.entity';
import { Assessment } from '../../assessment/assessment.entity';

@Entity()
export class Child {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Attendance, (attendance) => attendance.child)
  attendances: Attendance[];

  @OneToMany(() => Assessment, (assessment) => assessment.child)
  assessments: Assessment[];
}
