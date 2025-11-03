import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { CoachingService } from './coaching.service';
import { CreateChildDto, CreateSessionDto, MarkAttendanceDto, CreateAssessmentDto, CreateHomeVisitDto } from './dto/coaching.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('coaching')
export class CoachingController {
  constructor(private coachingService: CoachingService) {}

  @Post('children')
  createChild(@Body() createChildDto: CreateChildDto, @Request() req) {
    return this.coachingService.createChild(createChildDto, req.user.userId);
  }

  @Get('children')
  getChildren(@Request() req) {
    return this.coachingService.getChildren(req.user.userId);
  }

  @Post('sessions')
  createSession(@Body() createSessionDto: CreateSessionDto, @Request() req) {
    return this.coachingService.createSession(createSessionDto, req.user.userId);
  }

  @Get('sessions')
  getSessions(@Request() req) {
    return this.coachingService.getSessions(req.user.userId);
  }

  @Post('attendance')
  markAttendance(@Body() markAttendanceDto: MarkAttendanceDto) {
    return this.coachingService.markAttendance(markAttendanceDto);
  }

  @Post('assessments')
  createAssessment(@Body() createAssessmentDto: CreateAssessmentDto) {
    return this.coachingService.createAssessment(createAssessmentDto);
  }

  @Get('assessments/:childId')
  getAssessments(@Param('childId') childId: string) {
    return this.coachingService.getAssessments(childId);
  }

  @Post('home-visits')
  createHomeVisit(@Body() createHomeVisitDto: CreateHomeVisitDto, @Request() req) {
    return this.coachingService.createHomeVisit(createHomeVisitDto, req.user.userId);
  }

  @Get('home-visits')
  getHomeVisits(@Request() req) {
    return this.coachingService.getHomeVisits(req.user.userId);
  }

  @Get('reports')
  getReports(@Request() req) {
    return this.coachingService.getReports(req.user.userId);
  }
}