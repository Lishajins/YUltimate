import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Child } from './entities/child.entity';
import { ChildService } from './child.service';
import { ChildController } from './child.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Child])],
  controllers: [ChildController],
  providers: [ChildService],
  exports: [TypeOrmModule],
})
export class ChildModule {}
