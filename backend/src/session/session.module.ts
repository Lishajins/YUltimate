import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { Session } from './session.entity';
import { Coach } from 'src/coach/entities/coach.entity';
import { Child } from 'src/child/entities/child.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Session, Coach, Child])],
  controllers: [SessionController],
  providers: [SessionService],
})
export class SessionModule {}
