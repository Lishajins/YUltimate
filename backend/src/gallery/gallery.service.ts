import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGalleryDto, CreateFaceTagDto } from './dto/gallery.dto';

@Injectable()
export class GalleryService {
  constructor(private prisma: PrismaService) {}

  async uploadImage(createGalleryDto: CreateGalleryDto) {
    return this.prisma.gallery.create({
      data: createGalleryDto,
    });
  }

  async getImages() {
    return this.prisma.gallery.findMany({
      include: { faces: true },
      orderBy: [{ isPinned: 'desc' }, { uploadedAt: 'desc' }],
    });
  }

  async getImage(id: string) {
    return this.prisma.gallery.findUnique({
      where: { id },
      include: { faces: true },
    });
  }

  async togglePin(id: string) {
    const image = await this.prisma.gallery.findUnique({ where: { id } });
    return this.prisma.gallery.update({
      where: { id },
      data: { isPinned: !image.isPinned },
    });
  }

  async createFaceTag(createFaceTagDto: CreateFaceTagDto) {
    return this.prisma.faceTag.create({
      data: createFaceTagDto,
    });
  }

  async detectFaces(imageUrl: string) {
    // Mock face detection - in real implementation, integrate with AWS Rekognition
    return [
      { x: 0.2, y: 0.3, width: 0.15, height: 0.2 },
      { x: 0.6, y: 0.25, width: 0.12, height: 0.18 },
    ];
  }
}