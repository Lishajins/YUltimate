import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assessment } from './assessment.entity';
import { AssessmentService } from './assessment.service';
import { AssessmentController } from './assessment.controller';
import { Child } from '../child/entities/child.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Assessment, Child])],
  controllers: [AssessmentController],
  providers: [AssessmentService],
})
export class AssessmentModule {}
