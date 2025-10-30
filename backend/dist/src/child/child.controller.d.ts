import { ChildService } from './child.service';
import { Child } from './entities/child.entity';
export declare class ChildController {
    private readonly childService;
    constructor(childService: ChildService);
    create(body: Partial<Child>): Promise<Child>;
    findAll(): Promise<Child[]>;
    findOne(id: number): Promise<Child | null>;
}
