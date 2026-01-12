import { getScreenDimention } from '../../../utils/StyleUtils';

export const getPhotoSize = () => {
  const width = getScreenDimention()?.windowWidth;
  const imageWidth = width / 2 - 16; // minus margin
  const imageHeight = imageWidth;

  return {
    imageWidth,
    imageHeight,
  };
};
