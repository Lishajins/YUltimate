import { CoachService } from './coach.service';
import { Coach } from './entities/coach.entity';
export declare class CoachController {
    private readonly coachService;
    constructor(coachService: CoachService);
    findAll(): Promise<Coach[]>;
    findOne(id: number): Promise<Coach | null>;
    create(coachData: Partial<Coach>): Promise<Coach>;
    update(id: number, coachData: Partial<Coach>): Promise<Coach>;
    remove(id: number): Promise<void>;
}
