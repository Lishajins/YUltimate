import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Assessment } from './assessment.entity';
import { Child } from '../child/entities/child.entity';

@Injectable()
export class AssessmentService {
  constructor(
    @InjectRepository(Assessment)
    private readonly assessmentRepo: Repository<Assessment>,
    @InjectRepository(Child)
    private readonly childRepo: Repository<Child>,
  ) {}

  async create(data: any): Promise<Assessment> {
    const child = await this.childRepo.findOneBy({ id: data.childId });
    if (!child) throw new Error('Child not found');

    const assessment = this.assessmentRepo.create({
      subject: data.subject,
      score: data.score,
      child,
    });
    return this.assessmentRepo.save(assessment);
  }

  async findAll(): Promise<Assessment[]> {
    return this.assessmentRepo.find({ relations: ['child'] });
  }
}

