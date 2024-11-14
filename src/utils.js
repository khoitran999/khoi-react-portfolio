export const getImageUrl = (path) => {
  try {
    // Dynamic import using Vite's feature
    const imageUrl = new URL(`/src/assets/${path}`, import.meta.url).href;
    return imageUrl;
  } catch (error) {
    console.error('Error loading image:', error);
    return '';
  }
};