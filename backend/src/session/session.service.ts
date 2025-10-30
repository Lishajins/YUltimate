import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Session } from './session.entity';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private sessionRepo: Repository<Session>,
  ) {}

  findAll() {
    return this.sessionRepo.find({ relations: ['coach', 'child'] });
  }

  findOne(id: number) {
    return this.sessionRepo.findOne({
      where: { id },
      relations: ['coach', 'child'],
    });
  }

  create(sessionData: Partial<Session>) {
    const session = this.sessionRepo.create(sessionData);
    return this.sessionRepo.save(session);
  }

  update(id: number, sessionData: Partial<Session>) {
    return this.sessionRepo.update(id, sessionData);
  }

  delete(id: number) {
    return this.sessionRepo.delete(id);
  }
}
