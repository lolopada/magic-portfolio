// Client-safe utility for handling image paths with basePath
export function getImagePath(imagePath: string): string {
  // Use NEXT_PUBLIC_BASE_PATH or default to empty for dev
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // Only add basePath if the path starts with /
  if (imagePath.startsWith('/')) {
    return `${basePath}${imagePath}`;
  }
  return imagePath;
}
