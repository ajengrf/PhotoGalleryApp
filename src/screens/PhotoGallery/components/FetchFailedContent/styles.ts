import { StyleSheet } from 'react-native';
import { Colors } from '../../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    margin: 8,
    backgroundColor: Colors.red,
    alignSelf: 'center',
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
  },
});

export default styles;
