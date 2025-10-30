import { AttendanceService } from './attendance.service';
import { Attendance } from './attendance.entity';
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
    create(body: any): Promise<Attendance>;
    findAll(): Promise<Attendance[]>;
}
