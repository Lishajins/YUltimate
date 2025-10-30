import { Repository } from 'typeorm';
import { Coach } from './entities/coach.entity';
export declare class CoachService {
    private coachRepository;
    constructor(coachRepository: Repository<Coach>);
    findAll(): Promise<Coach[]>;
    findOne(id: number): Promise<Coach | null>;
    create(coach: Coach): Promise<Coach>;
    update(id: number, coach: Coach): Promise<Coach>;
    remove(id: number): Promise<void>;
}
