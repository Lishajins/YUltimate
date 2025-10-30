import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attendance } from './attendance.entity';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { Child } from '../child/entities/child.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attendance, Child])],
  controllers: [AttendanceController],
  providers: [AttendanceService],
})
export class AttendanceModule {}
