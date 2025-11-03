export declare enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}
export declare class CreateChildDto {
    name: string;
    age: number;
    gender: Gender;
}
export declare class CreateSessionDto {
    title: string;
    date: string;
}
export declare class MarkAttendanceDto {
    childId: string;
    sessionId: string;
    present: boolean;
}
export declare class CreateAssessmentDto {
    childId: string;
    skill: string;
    score: number;
    notes?: string;
}
export declare class CreateHomeVisitDto {
    childName: string;
    date: string;
    notes?: string;
}
