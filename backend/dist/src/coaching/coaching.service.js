"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CoachingService = class CoachingService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createChild(createChildDto, coachId) {
        return this.prisma.child.create({
            data: { ...createChildDto, coachId },
        });
    }
    async getChildren(coachId) {
        return this.prisma.child.findMany({
            where: { coachId },
            include: { attendances: true, assessments: true },
        });
    }
    async createSession(createSessionDto, coachId) {
        return this.prisma.session.create({
            data: {
                ...createSessionDto,
                date: new Date(createSessionDto.date),
                coachId,
            },
        });
    }
    async getSessions(coachId) {
        return this.prisma.session.findMany({
            where: { coachId },
            include: { attendances: { include: { child: true } } },
            orderBy: { date: 'desc' },
        });
    }
    async markAttendance(markAttendanceDto) {
        return this.prisma.attendance.upsert({
            where: {
                childId_sessionId: {
                    childId: markAttendanceDto.childId,
                    sessionId: markAttendanceDto.sessionId,
                },
            },
            update: { present: markAttendanceDto.present },
            create: markAttendanceDto,
        });
    }
    async createAssessment(createAssessmentDto) {
        return this.prisma.assessment.create({
            data: createAssessmentDto,
        });
    }
    async getAssessments(childId) {
        return this.prisma.assessment.findMany({
            where: { childId },
            orderBy: { date: 'desc' },
        });
    }
    async createHomeVisit(createHomeVisitDto, coachId) {
        return this.prisma.homeVisit.create({
            data: {
                ...createHomeVisitDto,
                date: new Date(createHomeVisitDto.date),
                coachId,
            },
        });
    }
    async getHomeVisits(coachId) {
        return this.prisma.homeVisit.findMany({
            where: { coachId },
            orderBy: { date: 'desc' },
        });
    }
    async getReports(coachId) {
        const children = await this.prisma.child.findMany({
            where: { coachId },
            include: { attendances: true },
        });
        const totalChildren = children.length;
        const genderDistribution = children.reduce((acc, child) => {
            acc[child.gender] = (acc[child.gender] || 0) + 1;
            return acc;
        }, {});
        const attendanceRate = children.reduce((acc, child) => {
            const totalSessions = child.attendances.length;
            const presentSessions = child.attendances.filter(a => a.present).length;
            return acc + (totalSessions > 0 ? presentSessions / totalSessions : 0);
        }, 0) / (totalChildren || 1);
        return {
            totalChildren,
            genderDistribution,
            attendanceRate: Math.round(attendanceRate * 100),
        };
    }
};
exports.CoachingService = CoachingService;
exports.CoachingService = CoachingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CoachingService);
//# sourceMappingURL=coaching.service.js.map