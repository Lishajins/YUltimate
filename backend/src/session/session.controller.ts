import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { SessionService } from './session.service';
import { Session } from './session.entity';

@Controller('sessions')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Get()
  findAll() {
    return this.sessionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.sessionService.findOne(id);
  }

  @Post()
  create(@Body() sessionData: Partial<Session>) {
    return this.sessionService.create(sessionData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() sessionData: Partial<Session>) {
    return this.sessionService.update(id, sessionData);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.sessionService.delete(id);
  }
}
