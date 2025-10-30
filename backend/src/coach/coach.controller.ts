import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CoachService } from './coach.service';
import { Coach } from './entities/coach.entity';

@Controller('coach')
export class CoachController {
  constructor(private readonly coachService: CoachService) {}

  @Get()
  findAll(): Promise<Coach[]> {
    return this.coachService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Coach | null> {
    return this.coachService.findOne(id);
  }

  @Post()
  async create(@Body() coachData: Partial<Coach>): Promise<Coach> {
    const newCoach = this.coachService.create(coachData as Coach);
    return newCoach;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() coachData: Partial<Coach>): Promise<Coach> {
    return this.coachService.update(id, coachData as Coach);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.coachService.remove(id);
  }
}
