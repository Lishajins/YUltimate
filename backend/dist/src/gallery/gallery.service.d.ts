import { PrismaService } from '../prisma/prisma.service';
import { CreateGalleryDto, CreateFaceTagDto } from './dto/gallery.dto';
export declare class GalleryService {
    private prisma;
    constructor(prisma: PrismaService);
    uploadImage(createGalleryDto: CreateGalleryDto): Promise<{
        id: string;
        title: string | null;
        imageUrl: string;
        description: string | null;
        isPinned: boolean;
        uploadedAt: Date;
    }>;
    getImages(): Promise<({
        faces: {
            id: string;
            galleryId: string;
            playerId: string | null;
            x: number;
            y: number;
            width: number;
            height: number;
        }[];
    } & {
        id: string;
        title: string | null;
        imageUrl: string;
        description: string | null;
        isPinned: boolean;
        uploadedAt: Date;
    })[]>;
    getImage(id: string): Promise<{
        faces: {
            id: string;
            galleryId: string;
            playerId: string | null;
            x: number;
            y: number;
            width: number;
            height: number;
        }[];
    } & {
        id: string;
        title: string | null;
        imageUrl: string;
        description: string | null;
        isPinned: boolean;
        uploadedAt: Date;
    }>;
    togglePin(id: string): Promise<{
        id: string;
        title: string | null;
        imageUrl: string;
        description: string | null;
        isPinned: boolean;
        uploadedAt: Date;
    }>;
    createFaceTag(createFaceTagDto: CreateFaceTagDto): Promise<{
        id: string;
        galleryId: string;
        playerId: string | null;
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    detectFaces(imageUrl: string): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }[]>;
}
