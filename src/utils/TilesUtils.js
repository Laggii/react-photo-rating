import images from 'configs/images.json';

export const getInitialTilesData = () => {
  return images.map((url, index) => ({
    tileKey: `photo-tile-${index + 1}`,
    url,
    rating: 0
  }));
};
