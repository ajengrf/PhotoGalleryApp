import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import FetchFailedContent from './components/FetchFailedContent';
import Loading from './components/Loading';
import PhotoList from './components/PhotoList';

import { useGetPhotos } from '../../hooks/useGetPhotos';
import styles from './styles';

const PhotoGallery = () => {
  const {
    data,
    fetchNextPage,
    isErrorOnInitialLoad,
    isFetchNextPageError,
    isFetchingNextPage,
    isInitialLoad,
  } = useGetPhotos();

  console.log({
    data: data,
    length: data?.length,
  });

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Text style={styles.textTitle}>Photo Gallery</Text>
      <View style={styles.line} />
      <Text style={styles.textSubtitle}>Daily dose of @picsum.</Text>
      {isInitialLoad ? (
        <Loading />
      ) : isErrorOnInitialLoad ? (
        <FetchFailedContent fetchNextPage={fetchNextPage} />
      ) : (
        <PhotoList
          data={data}
          fetchNextPage={fetchNextPage}
          isFetchNextPageError={isFetchNextPageError}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
    </SafeAreaView>
  );
};

export default PhotoGallery;
