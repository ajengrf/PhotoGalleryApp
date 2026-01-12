import { memo, useCallback, useMemo } from 'react';
import { FlatList } from 'react-native';

import { Photo } from '../../../../types/photo';

import Footer from '../Footer';
import PhotoCard from '../PhotoCard';

import { getPhotoSize } from '../../utils';

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

  const imageWidth = useMemo(() => getPhotoSize().imageWidth, []);

  const getItemLayout = useCallback(
    (_data: ArrayLike<Photo> | null | undefined, index: number) => {
      const row = Math.floor(index / 2);

      return {
        length: imageWidth,
        offset: imageWidth * row,
        index,
      };
    },
    [imageWidth],
  );

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
      //   getItemLayout={getItemLayout}
      onEndReached={onEndReached}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={10}
      onEndReachedThreshold={0.5}
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
