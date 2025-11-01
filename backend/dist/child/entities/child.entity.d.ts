import { Attendance } from '../../attendance/attendance.entity';
import { Assessment } from '../../assessment/assessment.entity';
export declare class Child {
    id: number;
    name: string;
    attendances: Attendance[];
    assessments: Assessment[];
}
