"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let GalleryService = class GalleryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async uploadImage(createGalleryDto) {
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
    async getImage(id) {
        return this.prisma.gallery.findUnique({
            where: { id },
            include: { faces: true },
        });
    }
    async togglePin(id) {
        const image = await this.prisma.gallery.findUnique({ where: { id } });
        return this.prisma.gallery.update({
            where: { id },
            data: { isPinned: !image.isPinned },
        });
    }
    async createFaceTag(createFaceTagDto) {
        return this.prisma.faceTag.create({
            data: createFaceTagDto,
        });
    }
    async detectFaces(imageUrl) {
        return [
            { x: 0.2, y: 0.3, width: 0.15, height: 0.2 },
            { x: 0.6, y: 0.25, width: 0.12, height: 0.18 },
        ];
    }
};
exports.GalleryService = GalleryService;
exports.GalleryService = GalleryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GalleryService);
//# sourceMappingURL=gallery.service.js.map