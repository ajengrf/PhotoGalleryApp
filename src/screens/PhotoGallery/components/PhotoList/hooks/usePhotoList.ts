import { useCallback, useState } from 'react';

import { Photo } from '../../../../../types/photo';

interface UsePhotoListProps {
  isFetchingNextPage: boolean;
  isFetchNextPageError: boolean;
  fetchNextPage: () => void;
}

export const usePhotoList = ({
  isFetchingNextPage,
  isFetchNextPageError,
  fetchNextPage,
}: UsePhotoListProps) => {
  const [favoriteIDs, setFavoriteIDs] = useState(new Set());

  const toggleFavorite = useCallback((id: string) => {
    setFavoriteIDs(prevData => {
      const nextData = new Set(prevData);
      nextData.has(id) ? nextData.delete(id) : nextData.add(id);
      return nextData;
    });
  }, []);

  const keyExtractor = useCallback((item: Photo) => {
    return `${item.id}`;
  }, []);

  const onEndReached = useCallback(() => {
    if (isFetchingNextPage) {
      return;
    }

    if (!isFetchNextPageError) {
      fetchNextPage();
    }
  }, [isFetchingNextPage, isFetchNextPageError, fetchNextPage]);

  return {
    favoriteIDs,
    toggleFavorite,
    keyExtractor,
    onEndReached,
  };
};
