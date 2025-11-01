import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ChildService } from './child.service';
import { Child } from './entities/child.entity';

@Controller('child')
export class ChildController {
  constructor(private readonly childService: ChildService) {}

  @Post()
  create(@Body() body: Partial<Child>) {
    return this.childService.create(body);
  }

  @Get()
  findAll() {
    return this.childService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.childService.findOne(id);
  }
}
