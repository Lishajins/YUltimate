import { IsString, IsDateString, IsOptional, IsArray, IsNumber } from 'class-validator';

export class CreateTournamentDto {
  @IsString()
  name: string;

  @IsString()
  field: string;

  @IsString()
  category: string;

  @IsDateString()
  startDate: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;
}

export class CreateTeamDto {
  @IsString()
  name: string;

  @IsString()
  tournamentId: string;
}

export class CreatePlayerDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsString()
  teamId: string;
}

export class UpdateSpiritScoreDto {
  @IsNumber()
  spiritScore: number;
}