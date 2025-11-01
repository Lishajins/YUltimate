import { Controller, Get, Post, Body } from '@nestjs/common';
import { AssessmentService } from './assessment.service';
import { Assessment } from './assessment.entity';

@Controller('assessment')
export class AssessmentController {
  constructor(private readonly assessmentService: AssessmentService) {}

  @Post()
  create(@Body() body: any): Promise<Assessment> {
    return this.assessmentService.create(body);
  }

  @Get()
  findAll(): Promise<Assessment[]> {
    return this.assessmentService.findAll();
  }
}
