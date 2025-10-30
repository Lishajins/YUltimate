import { Repository } from 'typeorm';
import { Attendance } from './attendance.entity';
import { Child } from '../child/entities/child.entity';
export declare class AttendanceService {
    private readonly attendanceRepo;
    private readonly childRepo;
    constructor(attendanceRepo: Repository<Attendance>, childRepo: Repository<Child>);
    create(data: any): Promise<Attendance>;
    findAll(): Promise<Attendance[]>;
}
