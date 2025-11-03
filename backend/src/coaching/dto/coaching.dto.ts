import { IsString, IsNumber, IsEnum, IsDateString, IsBoolean, IsOptional } from 'class-validator';

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

export class CreateChildDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsEnum(Gender)
  gender: Gender;
}

export class CreateSessionDto {
  @IsString()
  title: string;

  @IsDateString()
  date: string;
}

export class MarkAttendanceDto {
  @IsString()
  childId: string;

  @IsString()
  sessionId: string;

  @IsBoolean()
  present: boolean;
}

export class CreateAssessmentDto {
  @IsString()
  childId: string;

  @IsString()
  skill: string;

  @IsNumber()
  score: number;

  @IsOptional()
  @IsString()
  notes?: string;
}

export class CreateHomeVisitDto {
  @IsString()
  childName: string;

  @IsDateString()
  date: string;

  @IsOptional()
  @IsString()
  notes?: string;
}