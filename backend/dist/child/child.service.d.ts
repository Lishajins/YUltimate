import { Repository } from 'typeorm';
import { Child } from './entities/child.entity';
export declare class ChildService {
    private readonly childRepo;
    constructor(childRepo: Repository<Child>);
    create(data: Partial<Child>): Promise<Child>;
    findAll(): Promise<Child[]>;
    findOne(id: number): Promise<Child | null>;
}
