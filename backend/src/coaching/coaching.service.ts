import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateChildDto, CreateSessionDto, MarkAttendanceDto, CreateAssessmentDto, CreateHomeVisitDto } from './dto/coaching.dto';

@Injectable()
export class CoachingService {
  constructor(private prisma: PrismaService) {}

  async createChild(createChildDto: CreateChildDto, coachId: string) {
    return this.prisma.child.create({
      data: { ...createChildDto, coachId },
    });
  }

  async getChildren(coachId: string) {
    return this.prisma.child.findMany({
      where: { coachId },
      include: { attendances: true, assessments: true },
    });
  }

  async createSession(createSessionDto: CreateSessionDto, coachId: string) {
    return this.prisma.session.create({
      data: {
        ...createSessionDto,
        date: new Date(createSessionDto.date),
        coachId,
      },
    });
  }

  async getSessions(coachId: string) {
    return this.prisma.session.findMany({
      where: { coachId },
      include: { attendances: { include: { child: true } } },
      orderBy: { date: 'desc' },
    });
  }

  async markAttendance(markAttendanceDto: MarkAttendanceDto) {
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

  async createAssessment(createAssessmentDto: CreateAssessmentDto) {
    return this.prisma.assessment.create({
      data: createAssessmentDto,
    });
  }

  async getAssessments(childId: string) {
    return this.prisma.assessment.findMany({
      where: { childId },
      orderBy: { date: 'desc' },
    });
  }

  async createHomeVisit(createHomeVisitDto: CreateHomeVisitDto, coachId: string) {
    return this.prisma.homeVisit.create({
      data: {
        ...createHomeVisitDto,
        date: new Date(createHomeVisitDto.date),
        coachId,
      },
    });
  }

  async getHomeVisits(coachId: string) {
    return this.prisma.homeVisit.findMany({
      where: { coachId },
      orderBy: { date: 'desc' },
    });
  }

  async getReports(coachId: string) {
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
}