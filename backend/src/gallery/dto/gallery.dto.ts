import { IsString, IsOptional, IsBoolean, IsNumber } from 'class-validator';

export class CreateGalleryDto {
  @IsString()
  imageUrl: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isPinned?: boolean;
}

export class CreateFaceTagDto {
  @IsString()
  galleryId: string;

  @IsOptional()
  @IsString()
  playerId?: string;

  @IsNumber()
  x: number;

  @IsNumber()
  y: number;

  @IsNumber()
  width: number;

  @IsNumber()
  height: number;
}