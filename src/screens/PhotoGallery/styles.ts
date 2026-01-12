import { StyleSheet } from 'react-native';
import { Colors } from '../../themes';
import { getScreenDimention } from '../../utils/StyleUtils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.cream,
    paddingTop: 16,
  },
  textTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 8,
    color: Colors.red,
  },
  line: {
    width: getScreenDimention().windowWidth - 16,
    height: 1,
    backgroundColor: Colors.darkGrey,
    marginHorizontal: 8,
  },
  textSubtitle: {
    textAlign: 'center',
    color: Colors.darkGrey,
    marginTop: 8,
    marginBottom: 24,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    marginBottom: 8,
    backgroundColor: Colors.red,
    alignSelf: 'center',
  },
  retryText: {
    fontWeight: 'bold',
    color: Colors.white,
  },
  columnWrapper: {
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
});

export default styles;
