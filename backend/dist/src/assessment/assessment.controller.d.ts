import { AssessmentService } from './assessment.service';
import { Assessment } from './assessment.entity';
export declare class AssessmentController {
    private readonly assessmentService;
    constructor(assessmentService: AssessmentService);
    create(body: any): Promise<Assessment>;
    findAll(): Promise<Assessment[]>;
}
