import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Child } from './entities/child.entity';

@Injectable()
export class ChildService {
  constructor(
    @InjectRepository(Child)
    private readonly childRepo: Repository<Child>,
  ) {}

  async create(data: Partial<Child>): Promise<Child> {
    const child = this.childRepo.create(data);
    return this.childRepo.save(child);
  }

  async findAll(): Promise<Child[]> {
    return this.childRepo.find({ relations: ['attendances', 'assessments'] });
  }

  async findOne(id: number): Promise<Child | null> {
    return this.childRepo.findOne({
      where: { id },
      relations: ['attendances', 'assessments'],
    });
  }
}
