import { CoachingService } from './coaching.service';
import { CreateChildDto, CreateSessionDto, MarkAttendanceDto, CreateAssessmentDto, CreateHomeVisitDto } from './dto/coaching.dto';
export declare class CoachingController {
    private coachingService;
    constructor(coachingService: CoachingService);
    createChild(createChildDto: CreateChildDto, req: any): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        age: number;
        gender: string;
        coachId: string;
    }>;
    getChildren(req: any): Promise<({
        attendances: {
            id: string;
            childId: string;
            sessionId: string;
            present: boolean;
        }[];
        assessments: {
            id: string;
            date: Date;
            childId: string;
            skill: string;
            score: number;
            notes: string | null;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        age: number;
        gender: string;
        coachId: string;
    })[]>;
    createSession(createSessionDto: CreateSessionDto, req: any): Promise<{
        id: string;
        createdAt: Date;
        coachId: string;
        title: string;
        date: Date;
    }>;
    getSessions(req: any): Promise<({
        attendances: ({
            child: {
                id: string;
                name: string;
                createdAt: Date;
                age: number;
                gender: string;
                coachId: string;
            };
        } & {
            id: string;
            childId: string;
            sessionId: string;
            present: boolean;
        })[];
    } & {
        id: string;
        createdAt: Date;
        coachId: string;
        title: string;
        date: Date;
    })[]>;
    markAttendance(markAttendanceDto: MarkAttendanceDto): Promise<{
        id: string;
        childId: string;
        sessionId: string;
        present: boolean;
    }>;
    createAssessment(createAssessmentDto: CreateAssessmentDto): Promise<{
        id: string;
        date: Date;
        childId: string;
        skill: string;
        score: number;
        notes: string | null;
    }>;
    getAssessments(childId: string): Promise<{
        id: string;
        date: Date;
        childId: string;
        skill: string;
        score: number;
        notes: string | null;
    }[]>;
    createHomeVisit(createHomeVisitDto: CreateHomeVisitDto, req: any): Promise<{
        id: string;
        createdAt: Date;
        coachId: string;
        date: Date;
        notes: string | null;
        childName: string;
    }>;
    getHomeVisits(req: any): Promise<{
        id: string;
        createdAt: Date;
        coachId: string;
        date: Date;
        notes: string | null;
        childName: string;
    }[]>;
    getReports(req: any): Promise<{
        totalChildren: number;
        genderDistribution: {};
        attendanceRate: number;
    }>;
}
