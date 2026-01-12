import { memo, useMemo, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import FastImage from '@d11/react-native-fast-image';

import { Photo } from '../../../../types/photo';

import { showToast } from '../../../../native_modules/ToastModule';
import { Icons } from '../../../../assets';
import { Colors } from '../../../../themes';

import { getPhotoSize } from '../../utils';
import styles from './styles';

interface PhotoCardComponentProps {
  photo: Photo;
}

const PhotoCardComponent = ({ photo }: PhotoCardComponentProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const addToFavorite = () => {
    if (!isFavorite) {
      showToast('Added to favorites!');
    }
    setIsFavorite(!isFavorite);
  };

  const { imageWidth, imageHeight } = useMemo(() => {
    const width = getPhotoSize().imageWidth;
    const height = getPhotoSize().imageHeight;
    return { imageWidth: width, imageHeight: height };
  }, []);

  if (!photo?.url) {
    return;
  }

  return (
    <View style={styles.container}>
      <FastImage
        // source={{ uri: photo.download_url }}
        source={{
          uri: `https://picsum.photos/id/${photo.id}/${imageWidth}/${imageHeight}`,
        }}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <View style={styles.detailWrapper}>
          <Text style={styles.detailText}>Photo by</Text>
          <Text numberOfLines={1} style={styles.detailAuthorText}>
            {photo.author}
          </Text>
        </View>

        <Pressable onPress={addToFavorite}>
          <Image
            source={isFavorite ? Icons.icHeart : Icons.icHeartOutline}
            style={[
              styles.favoriteIcon,
              {
                tintColor: isFavorite ? Colors.red : Colors.darkGrey,
              },
            ]}
          />
        </Pressable>
      </View>
    </View>
  );
};

const PhotoCard = memo(PhotoCardComponent);

export default PhotoCard;
