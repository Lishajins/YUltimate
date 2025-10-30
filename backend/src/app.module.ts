import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Child } from './child/entities/child.entity';
import { Attendance } from './attendance/attendance.entity';
import { Assessment } from './assessment/assessment.entity';
import { ChildModule } from './child/child.module';
import { AttendanceModule } from './attendance/attendance.module';
import { AssessmentModule } from './assessment/assessment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Child, Attendance, Assessment],
      synchronize: true,
    }),
    ChildModule,
    AttendanceModule,
    AssessmentModule,
  ],
})
export class AppModule {}
