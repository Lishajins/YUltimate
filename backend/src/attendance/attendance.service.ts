import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attendance } from './attendance.entity';
import { Child } from '../child/entities/child.entity';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(Attendance)
    private readonly attendanceRepo: Repository<Attendance>,
    @InjectRepository(Child)
    private readonly childRepo: Repository<Child>,
  ) {}

  async create(data: any): Promise<Attendance> {
    const child = await this.childRepo.findOneBy({ id: data.childId });
    if (!child) throw new Error('Child not found');

    const attendance = this.attendanceRepo.create({
      date: data.date,
      status: data.status,
      child,
    });
    return this.attendanceRepo.save(attendance);
  }

  async findAll(): Promise<Attendance[]> {
    return this.attendanceRepo.find({ relations: ['child'] });
  }
}
