import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { CreateGalleryDto, CreateFaceTagDto } from './dto/gallery.dto';

@Controller('gallery')
export class GalleryController {
  constructor(private galleryService: GalleryService) {}

  @Post()
  uploadImage(@Body() createGalleryDto: CreateGalleryDto) {
    return this.galleryService.uploadImage(createGalleryDto);
  }

  @Get()
  getImages() {
    return this.galleryService.getImages();
  }

  @Get(':id')
  getImage(@Param('id') id: string) {
    return this.galleryService.getImage(id);
  }

  @Patch(':id/pin')
  togglePin(@Param('id') id: string) {
    return this.galleryService.togglePin(id);
  }

  @Post('face-tags')
  createFaceTag(@Body() createFaceTagDto: CreateFaceTagDto) {
    return this.galleryService.createFaceTag(createFaceTagDto);
  }

  @Post('detect-faces')
  detectFaces(@Body() body: { imageUrl: string }) {
    return this.galleryService.detectFaces(body.imageUrl);
  }
}