import { getScreenDimention } from '../../../utils/StyleUtils';

export const getPhotoSize = () => {
  const width = getScreenDimention()?.windowWidth;
  const imageWidth = Math.floor(width / 2);
  const imageHeight = imageWidth;

  return {
    imageWidth,
    imageHeight,
  };
};
