import { StyleSheet } from 'react-native';
import { getPhotoSize } from '../../utils';
import { Colors } from '../../../../themes';

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  image: {
    width: getPhotoSize().imageWidth - 16,
    height: getPhotoSize().imageHeight - 16,
    borderRadius: 16,
    backgroundColor: Colors.darkGrey,
    alignSelf: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginHorizontal: 8,
  },
  detailWrapper: {
    marginRight: 4,
    flex: 1,
  },
  detailText: {
    fontSize: 11,
    color: Colors.darkGrey,
  },
  detailAuthorText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.darkGrey,
  },
  favoriteIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default styles;
