import { Controller, Get, Post, Body } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { Attendance } from './attendance.entity';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post()
  create(@Body() body: any): Promise<Attendance> {
    return this.attendanceService.create(body);
  }

  @Get()
  findAll(): Promise<Attendance[]> {
    return this.attendanceService.findAll();
  }
}
