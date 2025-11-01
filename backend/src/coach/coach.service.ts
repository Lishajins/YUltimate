import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coach } from './entities/coach.entity';

@Injectable()
export class CoachService {
  constructor(
    @InjectRepository(Coach)
    private coachRepository: Repository<Coach>,
  ) {}

  async findAll(): Promise<Coach[]> {
    return this.coachRepository.find();
  }

  async findOne(id: number): Promise<Coach | null> {
    return this.coachRepository.findOneBy({ id });
  }

  async create(coach: Coach): Promise<Coach> {
    return this.coachRepository.save(coach);
  }

  async update(id: number, coach: Coach): Promise<Coach> {
    await this.coachRepository.update(id, coach);
    return (await this.coachRepository.findOneBy({ id }))!;
  }

  async remove(id: number): Promise<void> {
    await this.coachRepository.delete(id);
  }
}
