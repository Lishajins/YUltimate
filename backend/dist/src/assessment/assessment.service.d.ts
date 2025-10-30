import { Repository } from 'typeorm';
import { Assessment } from './assessment.entity';
import { Child } from '../child/entities/child.entity';
export declare class AssessmentService {
    private readonly assessmentRepo;
    private readonly childRepo;
    constructor(assessmentRepo: Repository<Assessment>, childRepo: Repository<Child>);
    create(data: any): Promise<Assessment>;
    findAll(): Promise<Assessment[]>;
}
