import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/*.{jpeg,jpg,png,gif,webp}', { eager: true });

export const resolveImage = (imagePath: string): ImageMetadata => {
    const path = imagePath.replace('/assets/', '/src/assets/');
    const image = images[path]?.default;

    if (!image) {
        throw new Error(`Imagen no encontrada: ${path}`);
    }

    return image;
};
