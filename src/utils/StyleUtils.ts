import { Dimensions } from 'react-native';

export const getScreenDimention = () => {
  const { width, height } = Dimensions.get('window');

  return { windowWidth: width, windowHeight: height };
};
