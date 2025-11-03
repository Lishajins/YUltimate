export declare class CreateGalleryDto {
    imageUrl: string;
    title?: string;
    description?: string;
    isPinned?: boolean;
}
export declare class CreateFaceTagDto {
    galleryId: string;
    playerId?: string;
    x: number;
    y: number;
    width: number;
    height: number;
}
