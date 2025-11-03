import { IsEmail, IsString, MinLength, IsEnum, IsOptional } from 'class-validator';

export enum Role {
  ADMIN = 'ADMIN',
  COACH = 'COACH',
  PLAYER = 'PLAYER',
  SPECTATOR = 'SPECTATOR',
}

export class SignUpDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role = Role.SPECTATOR;
}

export class SignInDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}