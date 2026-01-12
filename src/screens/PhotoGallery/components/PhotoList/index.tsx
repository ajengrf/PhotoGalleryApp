import { memo, useCallback } from 'react';
import { FlatList } from 'react-native';

import { Photo } from '../../../../types/photo';

import Footer from '../Footer';
import PhotoCard from '../PhotoCard';

import styles from '../../styles';

interface PhotoListComponentProps {
  data: Photo[] | null;
  isFetchingNextPage: boolean;
  isFetchNextPageError: boolean;
  fetchNextPage: () => void;
}

const PhotoListComponent = ({
  data,
  isFetchingNextPage,
  isFetchNextPageError,
  fetchNextPage,
}: PhotoListComponentProps) => {
  console.log('photolist');

  const renderItem = useCallback(({ item }: { item: Photo }) => {
    return <PhotoCard photo={item} />;
  }, []);

  const keyExtractor = useCallback((item: Photo) => {
    return `${item.id}`;
  }, []);

  const onEndReached = useCallback(() => {
    console.log('onEndReached');

    if (isFetchingNextPage) {
      return;
    }

    if (!isFetchNextPageError) {
      fetchNextPage();
    }
  }, [isFetchingNextPage, isFetchNextPageError, fetchNextPage]);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={keyExtractor}
      onEndReached={onEndReached}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={10}
      onEndReachedThreshold={0.5}
      columnWrapperStyle={styles.columnWrapper}
      ListFooterComponent={
        <Footer
          isFetchingNextPage={isFetchingNextPage}
          isFetchNextPageError={isFetchNextPageError}
          fetchNextPage={fetchNextPage}
        />
      }
    />
  );
};

const PhotoList = memo(PhotoListComponent);

export default PhotoList;
