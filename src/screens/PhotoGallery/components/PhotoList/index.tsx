import { memo, useCallback, useState } from 'react';
import { FlashList } from '@shopify/flash-list';

import { Photo } from '../../../../types/photo';

import Footer from '../Footer';
import PhotoCard from '../PhotoCard';

import { usePhotoList } from './hooks/usePhotoList';
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
  const { favoriteIDs, keyExtractor, onEndReached, toggleFavorite } =
    usePhotoList({
      isFetchingNextPage,
      isFetchNextPageError,
      fetchNextPage,
    });

  const renderItem = useCallback(
    ({ item }: { item: Photo }) => {
      const isFavorite = favoriteIDs.has(item.id);

      return (
        <PhotoCard
          photo={item}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
        />
      );
    },
    [favoriteIDs, toggleFavorite],
  );

  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={keyExtractor}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        <Footer
          isFetchingNextPage={isFetchingNextPage}
          isFetchNextPageError={isFetchNextPageError}
          fetchNextPage={fetchNextPage}
        />
      }
      contentContainerStyle={styles.listContentContainer}
    />
  );
};

const PhotoList = memo(PhotoListComponent);

export default PhotoList;
