import { NativeModules, Platform } from 'react-native';

const { ToastModule } = NativeModules;

export const showToast = (message: string, duration = 0) => {
  if (Platform.OS === 'android') {
    ToastModule.showToast(message, duration);
  }
};
